use axum::extract::State;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};
use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize)]
pub struct ListAppsResponse {
    first_id: String,
}

pub async fn list_apps(State(appcase): State<Appcase>) -> Response<ListAppsResponse> {
    let apps = appcase.list_apps().await;
    println!("{:?}", apps);
    Response(ListAppsResponse {
        first_id: apps[0]._id.clone(),
    })
}
