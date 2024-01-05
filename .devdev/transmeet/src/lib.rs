use wasm_bindgen::prelude::*;

pub mod commands;
pub mod pdf;
use crate::commands::replace::replace;
use crate::pdf::generate::generate as generate_pdf_handler;

#[wasm_bindgen]
pub fn execute(value: &str, query: &str) -> Result<JsValue, JsValue> {
    let ret = execute_hanlder(value, query);
    Ok(serde_wasm_bindgen::to_value(&ret)?)
}

pub fn execute_hanlder(value: &str, query: &str) -> String {
    if query == "replace" {
        return replace(value);
    }
    value.to_string()
}

#[wasm_bindgen]
pub fn generate_pdf() -> Result<JsValue, JsValue> {
    let ret = generate_pdf_handler();
    Ok(serde_wasm_bindgen::to_value(&ret)?)
}
