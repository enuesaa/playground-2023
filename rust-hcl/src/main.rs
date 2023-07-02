use serde_json::Value;

fn main() {
    let input = r#"
    resource "note" "main" {
        name = "something main note"
    }

    resource "note" "sub" {
        name = "something sub note"

        created = "2023-07-02T14:49+09:00"
    }
    "#;

    let value: Value = hcl::from_str(input).unwrap();
    println!("{}", value);
}
