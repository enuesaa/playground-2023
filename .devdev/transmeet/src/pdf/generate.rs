use printpdf::*;
use std::str;
use std::io::BufWriter;

pub fn generate() -> String {
    let (doc, _, _) = PdfDocument::new(
        "title", 
        Mm(247.0),
        Mm(210.0),
        "layer1",
    );

    let mut buf = vec![];
    doc.save(&mut BufWriter::new(&mut buf)).unwrap();
    str::from_utf8(&buf).unwrap().to_string()
}

#[test]
fn test_generate() {
    assert_ne!(generate(), "".to_string());
}