use axum::response::Json as Response;
use serde::{Serialize, Deserialize};
use crate::usecase::appcase::Appcase;
use crate::repository::couch::CouchRepository;

#[derive(Serialize, Deserialize)]
pub struct ListAppsResponse {
    first_id: String,
}

// use Extension to handle di.

pub async fn list_apps() -> Response<ListAppsResponse> {
    let apps = Appcase::new(CouchRepository::new()).list_apps().await;
    println!("{:?}", apps);
    Response(ListAppsResponse {
        first_id: apps[0]._id.clone(),
    })
}
