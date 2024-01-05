use transmeet::execute_hanlder;

#[test]
fn test_sample_query() {
    let value = "bbb";
    let query = "replace{from: a, to: b} | trim{max: 2}";
    assert_eq!(execute_hanlder(value, query), "bbbbbccc".to_string());
}
