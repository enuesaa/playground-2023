use serde_json::Value;

fn main() {
    let input = r#"
    resource "something_resource" "main" {
        name = "main-resource"

        aaaaa {
            bb = "cc"
        }
    }

    resource "aws_codebuild_project" "main" {
        name          = "main-build"
        service_role  = aws_iam_role.codebuild.arn
      
        artifacts {
          type = "NO_ARTIFACTS"
        }
      
        environment {
          compute_type                = "BUILD_GENERAL1_SMALL"
          image                       = "aws/codebuild/amazonlinux2-x86_64-standard:4.0"
          type                        = "LINUX_CONTAINER"
          image_pull_credentials_type = "CODEBUILD"
        }
      
        logs_config {
          cloudwatch_logs {
            group_name  = "log-group"
            stream_name = "log-stream"
          }
        }
      
        source {
          type            = "GITHUB"
          location        = "https://github.com/example/example.git"
          git_clone_depth = 1
      
          git_submodules_config {
            fetch_submodules = true
          }
        }
        source_version = "main"
      }
    "#;

    let value: Value = hcl::from_str(input).unwrap();
    println!("{}", value);
}
