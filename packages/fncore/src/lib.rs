use wasm_bindgen::prelude::*;

pub mod fns;
use crate::fns::replacefn::replacefn;
use crate::fns::countfn::countfn;
use crate::fns::json2yamlfn::json2yamlfn;
use crate::fns::jsonformatfn::jsonformatfn;
use crate::fns::base64decodefn::base64decodefn;

#[wasm_bindgen]
pub fn replace(text: &str, from: &str, to: &str) -> Result<JsValue, JsValue> {
    Ok(serde_wasm_bindgen::to_value(&replacefn(text, from, to))?)
}

#[wasm_bindgen]
pub fn count(text: &str) -> Result<JsValue, JsValue> {
    Ok(serde_wasm_bindgen::to_value(&countfn(text))?)
}

#[wasm_bindgen]
pub fn json2yaml(text: &str) -> Result<JsValue, JsValue> {
    Ok(serde_wasm_bindgen::to_value(&json2yamlfn(text))?)
}

#[wasm_bindgen]
pub fn jsonformat(text: &str) -> Result<JsValue, JsValue> {
    Ok(serde_wasm_bindgen::to_value(&jsonformatfn(text))?)
}

#[wasm_bindgen]
pub fn base64decode(text: &str) -> Result<JsValue, JsValue> {
    Ok(serde_wasm_bindgen::to_value(&base64decodefn(text))?)
}
