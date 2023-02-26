use wasm_bindgen::prelude::*;
use serde::Serialize;
use rand::SeedableRng;
use rand::rngs::StdRng;
use rand::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[derive(Serialize)]
struct Points {
    x: u8,
    y: u8,
}
#[wasm_bindgen]
pub fn generate_points(count: usize) -> Result<JsValue, JsValue> {
    let mut rng: StdRng = SeedableRng::seed_from_u64(99);
    
    let mut ret = Vec::with_capacity(count);
    for _ in 0..count {
        ret.push(Points {
            x: rng.gen::<u8>(),
            y: rng.gen::<u8>(),
        });
    };
    Ok(serde_wasm_bindgen::to_value(&ret)?)
}

#[test]
fn greet_test() {
    assert_eq!(greet("aaa"), "Hello, aaa!");
}
