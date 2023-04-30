use wasm_bindgen::prelude::*;

pub mod fns;
use crate::fns::replacefn::replacefn;

#[wasm_bindgen]
pub fn replace(text: &str, from: &str, to: &str) -> Result<JsValue, JsValue> {
    Ok(serde_wasm_bindgen::to_value(&replacefn(text, from, to))?)
}
