use jsonwith::json2yaml;

pub fn json2yamlfn(text: &str) -> String {
    json2yaml(text, 2)
}

#[test]
fn test_json2yamlfn() {
    let ret = json2yamlfn("{\"a\":\"b\"}");
    assert_eq!("a: b\n", ret);
}
