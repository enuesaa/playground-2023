use axum::extract::Json as Request;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct CreactAppRequest {
    a: String,
}

#[derive(Serialize, Deserialize)]
pub struct CreateAppResponse {}

pub async fn create_app(Request(req): Request<CreactAppRequest>) -> Response<CreateAppResponse> {
    println!("{:?}", req);
    Response(CreateAppResponse {})
}
