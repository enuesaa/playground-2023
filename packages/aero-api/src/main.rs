pub mod route;
pub mod controller;
pub mod repository;

use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = route::router();

    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
