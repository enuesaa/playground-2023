pub mod router;
pub mod controller;
pub mod repository;
pub mod service;
pub mod usecase;

use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = router::app();

    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
