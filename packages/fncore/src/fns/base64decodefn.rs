use base64::{Engine as _, engine::general_purpose};

pub fn base64decodefn(text: &str) -> String {
    let bytes = general_purpose::STANDARD
        .decode(text).unwrap();
    String::from_utf8(bytes).unwrap()
}

#[test]
fn test_base64decodefn() {
    let ret = base64decodefn("YeOBguOBi+OBleOBn+OBqg==");
    assert_eq!("aあかさたな", ret);
}
