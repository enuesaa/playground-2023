use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct ListAppsResponse {}

// use Extension to handle di.

pub async fn list_apps() -> Response<ListAppsResponse> {
    Response(ListAppsResponse {})
}
