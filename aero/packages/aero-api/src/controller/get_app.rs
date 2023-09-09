use axum::extract::{Path, State};
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize)]
pub struct GetAppResponse {
    id: String,
    name: String,
    description: String,
    saved: String,
}

pub async fn get_app(
    State(appcase): State<Appcase>,
    Path(app_id): Path<String>,
) -> Response<GetAppResponse> {

    let app = appcase.get_app(&app_id).await;

    Response(GetAppResponse {
        id: app_id.to_string(),
        name: app.get_name(),
        description: app.get_description(),
        saved: app.get_saved(),
    })
}
