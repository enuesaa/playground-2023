use axum::extract::{Json as Request, State, Multipart, Path};
use std::fs;
use dirs::home_dir;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};
use crate::{usecase::appcase::Appcase, service::appversion::Appversion};

#[derive(Serialize, Deserialize, Debug)]
pub struct CreactAppVersionRequest {
    handler: String,
    wat: String,
}

#[derive(Serialize, Deserialize)]
pub struct CreateAppversionResponse {
    id: String,
}

// upload もこのエンドポイントでする
pub async fn create_appversion(
    State(appcase): State<Appcase>,
    Path(app_id): Path<String>,
    Request(req): Request<CreactAppVersionRequest>,
) -> Response<CreateAppversionResponse> {

    let mut appversion = Appversion::new();
    appversion.set_app_id(&app_id);
    appversion.set_handler(&req.handler);
    appversion.set_wat(&req.wat);

    let id = appcase.create_appversion(appversion).await;
    Response(CreateAppversionResponse { id })
}
