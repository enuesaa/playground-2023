use axum::extract::State;
use axum::response::Json as Response;
use couch_rs::document::TypedCouchDocument;
use serde::{Serialize, Deserialize};
use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize)]
pub struct AppItem {
    id: String,
    name: String,
    description: String,
    saved: String,
}

#[derive(Serialize, Deserialize)]
pub struct ListAppsResponse {
    items: Vec<AppItem>,
}

pub async fn list_apps(State(appcase): State<Appcase>) -> Response<ListAppsResponse> {
    let apps = appcase.list_apps().await;

    let items = apps.iter().map(|v| AppItem {
        id: v.get_id(),
        name: v.get_name(),
        description: v.get_description(),
        saved: v.get_description(),
    }).collect();

    Response(ListAppsResponse { items })
}
