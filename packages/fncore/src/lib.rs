use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn replace(text: &str, from: &str, to: &str) -> Result<JsValue, JsValue> {
    let ret = text.replace(from, to);
    Ok(serde_wasm_bindgen::to_value(&ret)?)
}
