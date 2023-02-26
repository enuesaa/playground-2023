use wasm_bindgen::prelude::*;
use serde::Serialize;
use rand::SeedableRng;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[derive(Serialize)]
struct Points {
    x: u16,
    y: u16,
}
#[wasm_bindgen]
pub fn generate_points(count: u8) -> Result<JsValue, JsValue> {
    let mut rng: rand::rngs::StdRng = SeedableRng::from_seed([13; 32]);
    
    let mut ret = vec![];
    for _i in 1..count {
        ret.push(Points { x: rng.gen::<u16>(), y: rng.gen::<u16>() });
    };
    Ok(serde_wasm_bindgen::to_value(&ret)?)
}

#[test]
fn greet_test() {
    assert_eq!(greet("aaa"), "Hello, aaa!");
}
