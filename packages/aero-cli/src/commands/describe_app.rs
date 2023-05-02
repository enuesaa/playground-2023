use clap::Args;

#[derive(Debug, Args)]
pub struct DescribeAppArgs {
    #[arg(long)]
    name: String,
}