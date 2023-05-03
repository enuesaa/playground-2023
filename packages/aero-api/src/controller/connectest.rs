use crate::repository::couch::CouchRepository;
use axum::extract::Json as Request;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct ConnectestRequest {
    a: String,
}

#[derive(Serialize, Deserialize)]
pub struct ConnectestResponse {
    b: String,
}

pub async fn connectest(Request(_): Request<ConnectestRequest>) -> Response<ConnectestResponse> {
    let couch = CouchRepository::new();
    let docs = couch.find_all("apps").await;
    println!("{:?}", docs);

    Response(ConnectestResponse {
        b: "b".to_string(),
    })
}
