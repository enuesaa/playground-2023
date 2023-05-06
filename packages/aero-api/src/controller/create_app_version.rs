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

pub async fn create_appversion(
    State(appcase): State<Appcase>,
    Path((app_id, version_id)): Path<(String, String)>,
    Request(req): Request<CreactAppVersionRequest>,
    // mut multipart: Multipart,
) -> Response<CreateAppversionResponse> {
    // while let Some(field) = multipart.next_field().await.unwrap() {
    //     let name = field.name().unwrap().to_string();
    //     let data = field.bytes().await.unwrap();

    //     println!("Length of `{}` is {} bytes", name, data.len());
    //     let path = home_dir().unwrap().join("tmp/a.jpeg");
    //     fs::write(path, data).unwrap();
    // }

    let mut appversion = Appversion::new();
    appversion.set_handler(&req.handler);
    appversion.set_wat(&req.wat);

    let id = appcase.create_appversion(appversion).await;
    Response(CreateAppversionResponse { id })
}
