use axum::routing::{get, post};
use axum::Router;

use crate::controller::root::root;
use crate::controller::upload::upload;

pub fn router() -> Router {
    Router::new()
        .route("/", get(root))
        .route("/upload", post(upload))
}