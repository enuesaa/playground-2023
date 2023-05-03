use axum::extract::Path;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct DeleteAppResponse {}

pub async fn delete_app(Path(app_id): Path<String>) -> Response<DeleteAppResponse> {
    println!("{:?}", app_id);
    Response(DeleteAppResponse {})
}
