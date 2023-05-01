use jsonwith_formatter::json2json;

pub fn jsonformatfn(text: &str) -> String {
    json2json(text, 2)
}

#[test]
fn test_json2yamlfn() {
    let ret = jsonformatfn("{\"a\":\"b\"}");
    assert_eq!("{\n  \"a\": \"b\"\n}\n", ret);
}
