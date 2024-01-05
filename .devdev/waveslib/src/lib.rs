use wasm_bindgen::prelude::*;

pub mod services;
use crate::services::points::Points;

#[wasm_bindgen]
pub fn generate_points(count: usize) -> Result<JsValue, JsValue> {
    let ret = Points::from_count(count);
    Ok(serde_wasm_bindgen::to_value(&ret.values)?)
}
