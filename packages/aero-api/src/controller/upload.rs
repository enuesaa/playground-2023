use axum::extract::Multipart;
use std::fs;
use dirs::home_dir;

pub async fn upload(mut multipart: Multipart) {
    while let Some(field) = multipart.next_field().await.unwrap() {
        let name = field.name().unwrap().to_string();
        let data = field.bytes().await.unwrap();

        println!("Length of `{}` is {} bytes", name, data.len());
        let path = home_dir().unwrap().join("tmp/a.jpeg");
        fs::write(path, data).unwrap();
    }
}
