use axum::routing::{get, post};
use axum::Router;

use crate::controller::root::root;
use crate::controller::upload::upload;
use crate::controller::connectest::connectest;

pub fn router() -> Router {
    Router::new()
        .route("/", get(root))
        .route("/upload", post(upload))
        .route("/connectest", get(connectest))
}