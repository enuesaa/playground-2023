
pub fn countfn(text: &str) -> usize {
    text.len()
}

#[test]
fn test_countfn() {
    let ret = countfn("bbaacca");
    assert_eq!(7, ret);
}
