use wasm_bindgen::prelude::*;

pub mod commands;
use crate::commands::replace::replace;

#[wasm_bindgen]
pub fn execute(value: &str, query: &str) -> Result<JsValue, JsValue> {
    let ret = execute_hanlder(value, query);
    Ok(serde_wasm_bindgen::to_value(&ret)?)
}

fn execute_hanlder(value: &str, query: &str) -> String {
    if query == "replace" {
        return replace(value);
    }
    value.to_string()
}