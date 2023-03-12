use transmeet::commands::replace::replace;

#[test]
fn test_replace() {
    assert_eq!(replace("bbaaaccc"), "bbbbbccc".to_string());
}
