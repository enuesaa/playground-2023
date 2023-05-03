use axum::extract::Path;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct GetAppResponse {}

pub async fn get_app(Path(app_id): Path<String>) -> Response<GetAppResponse> {
    println!("{:?}", app_id);

    Response(GetAppResponse {})
}
