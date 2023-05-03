use axum::{
    routing::{get, post},
    Router,
    extract::Multipart,
};
use std::net::SocketAddr;
use std::fs;
use dirs::home_dir;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(root))
        .route("/upload", post(upload));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn root() -> &'static str {
    "Hello, World!"
}

async fn upload(mut multipart: Multipart) {
    while let Some(field) = multipart.next_field().await.unwrap() {
        let name = field.name().unwrap().to_string();
        let data = field.bytes().await.unwrap();

        println!("Length of `{}` is {} bytes", name, data.len());
        let path = home_dir().unwrap().join("tmp/a.jpeg");
        fs::write(path, data).unwrap();
    }
}
