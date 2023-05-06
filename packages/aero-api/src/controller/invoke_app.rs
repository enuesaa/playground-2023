use axum::extract::{Path, State};
use axum::extract::Json as Request;
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

use crate::repository::runwasm::RunwasmRepository;
use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize, Debug)]
pub struct InvokeAppRequest {}

#[derive(Serialize, Deserialize)]
pub struct InvokeAppResponse {}

pub async fn invoke_app(
    State(appcase): State<Appcase>,
    Path(app_id): Path<String>,
    Request(req): Request<InvokeAppRequest>,
) -> Response<InvokeAppResponse> {

    let runwasm = RunwasmRepository::new();
    runwasm.run();

    Response(InvokeAppResponse {})
}
