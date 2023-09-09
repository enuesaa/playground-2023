use axum::extract::{Path, State};
use axum::extract::Json as Request;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize, Debug)]
pub struct InvokeAppVersionRequest {}

#[derive(Serialize, Deserialize)]
pub struct InvokeAppVersionResponse {}

pub async fn invoke_app_version(
    State(appcase): State<Appcase>,
    Path((app_id, version_id)): Path<(String, String)>,
    Request(req): Request<InvokeAppVersionRequest>,
) -> Response<InvokeAppVersionResponse> {

    appcase.invoke_appversion(&version_id).await;

    Response(InvokeAppVersionResponse {})
}
