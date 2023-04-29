use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello(name: &str) -> Result<JsValue, JsValue> {
    let ret = format!("hello {}", name);
    Ok(serde_wasm_bindgen::to_value(&ret)?)
}
