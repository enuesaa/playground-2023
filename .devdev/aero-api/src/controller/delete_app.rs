use axum::extract::{Path, State};
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize)]
pub struct DeleteAppResponse {}

pub async fn delete_app(
    State(appcase): State<Appcase>,
    Path(app_id): Path<String>,
) -> Response<DeleteAppResponse> {

    appcase.delete_app(&app_id).await;

    Response(DeleteAppResponse {})
}
