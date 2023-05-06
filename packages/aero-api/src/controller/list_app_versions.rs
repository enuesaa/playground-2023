use axum::extract::{State, Path};
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};
use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize)]
pub struct AppversionItem {
    id: String,
    handler: String,
    wat: String,
}

#[derive(Serialize, Deserialize)]
pub struct ListAppVersionsResponse {
    items: Vec<AppversionItem>,
}

pub async fn list_app_versions(
    State(appcase): State<Appcase>,
    Path((app_id, version_id)): Path<(String, String)>,
) -> Response<ListAppVersionsResponse> {
    let apps = appcase.list_appversions().await;

    let items = apps.iter().map(|v| AppversionItem {
        id: v.get_id(),
        handler: v.get_handler(),
        wat: v.get_wat(),
    }).collect();

    Response(ListAppVersionsResponse { items })
}
