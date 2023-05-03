use crate::repository::couch::CouchRepository;
use axum::extract::Json as Request;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct SetupRequest {}

#[derive(Serialize, Deserialize)]
pub struct SetupResponse {}

pub async fn setup(Request(_): Request<SetupRequest>) -> Response<SetupResponse> {
    let couch = CouchRepository::new();

    // get or create database. see couch_rs::client::Client::db;
    couch.db("apps").await;
    couch.db("invocations").await;

    Response(SetupResponse {})
}
