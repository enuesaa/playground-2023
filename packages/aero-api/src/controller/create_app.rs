use axum::extract::{Json as Request, State};
use axum::response::Json as Response;
use serde::{Serialize, Deserialize};

use crate::service::app::App;
use crate::usecase::appcase::Appcase;

#[derive(Serialize, Deserialize, Debug)]
pub struct CreactAppRequest {
    name: String,
    description: String,
    saved: String, // path
}

#[derive(Serialize, Deserialize)]
pub struct CreateAppResponse {
    id: String,
}

pub async fn create_app(
    State(appcase): State<Appcase>,
    Request(req): Request<CreactAppRequest>,
) -> Response<CreateAppResponse> {
    let mut app = App::new();
    app.set_name(&req.name);
    app.set_description(&req.description);
    app.set_saved(&req.saved);

    let id = appcase.create_app(app).await;

    Response(CreateAppResponse { id })
}
