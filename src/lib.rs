pub mod util;

use serde_json;
use serde_json::Value;

pub fn json2yaml(json_string: &str) -> String {
    let value: Value = serde_json::from_str(json_string).unwrap();
    serde_yaml::to_string(&value).unwrap()
}

pub fn json2json(json_string: &str) -> String {
    let value: Value = serde_json::from_str(json_string).unwrap();
    // https://stackoverflow.com/questions/42722169/generate-pretty-indented-json-with-serde
    serde_json::to_string_pretty(&value).unwrap()
}
