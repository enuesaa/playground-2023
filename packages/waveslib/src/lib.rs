use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[test]
fn greet_test() {
    assert_eq!(greet("aaa"), "Hello, aaa!");
}