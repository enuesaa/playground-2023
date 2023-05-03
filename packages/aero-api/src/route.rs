use axum::routing::{get, post, delete};
use axum::Router;

use crate::controller::root::root;
use crate::controller::upload::upload;
use crate::controller::setup::setup;
use crate::controller::list_apps::list_apps;
use crate::controller::get_app::get_app;
use crate::controller::create_app::create_app;
use crate::controller::delete_app::delete_app;

pub fn router() -> Router {
    Router::new()
        .route("/", get(root))
        .route("/upload", post(upload))
        .route("/setup", post(setup))
        .route("/apps", get(list_apps))
        .route("/apps/:app_id", get(get_app))
        .route("/apps", post(create_app))
        .route("/apps/:app_id", delete(delete_app))
}
