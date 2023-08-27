
pub fn replacefn(text: &str, from: &str, to: &str) -> String {
    text.replace(from, to)
}

#[test]
fn test_replacefn() {
    let ret = replacefn("bbaacca", "a", "b");
    assert_eq!("bbbbccb".to_string(), ret);
}
