use transmeet::commands::replace::replace;
use transmeet::commands::trim::trim;

#[test]
fn test_replace() {
    assert_eq!(replace("bbaaaccc"), "bbbbbccc".to_string());
}

#[test]
fn test_trim() {
    assert_eq!(trim(" bbaaaccc"), "bbbbbccc".to_string());
}
