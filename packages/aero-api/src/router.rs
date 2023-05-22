use axum::routing::{get, post, delete};
use axum::Router;

use crate::controller::setup::setup;
use crate::controller::list_apps::list_apps;
use crate::controller::get_app::get_app;
use crate::controller::create_app::create_app;
use crate::controller::delete_app::delete_app;
use crate::controller::invoke_app_version::invoke_app_version;
use crate::controller::list_app_versions::list_app_versions;
use crate::controller::create_app_version::create_appversion;
use crate::repository::couch::CouchRepository;
use crate::repository::runwasm::RunwasmRepository;
use crate::usecase::appcase::Appcase;

pub fn app() -> Router {
    let appcase = Appcase::new(
        CouchRepository::new(),
        RunwasmRepository::new(),
    );

    Router::new()
        .route("/setup", post(setup))
        .route("/apps", get(list_apps))
        .route("/apps/:app_id", get(get_app))
        .route("/apps", post(create_app))
        .route("/apps/:app_id", delete(delete_app))
        // .route("/apps/:app_id/versions", get(list_app_versions))
        // // update meta 
        // .route("/apps/:app_id/versions", post(create_appversion))
        // .route("/apps/:app_id/versions/:version_id/invoke", post(invoke_app_version))
        .with_state(appcase)
}


// see https://github.com/tokio-rs/axum/blob/main/examples/testing/src/main.rs
#[cfg(test)]
mod tests {
    use axum::body::Body;
    use axum::http::{Request, StatusCode};
    use tower::ServiceExt;
    use crate::router::app;
    use crate::usecase::appcase::Appcase;

    #[tokio::test]
    async fn list_apps_test() {
        // let appcase = Appcase::new(
        //     CouchRepository::new(),
        //     RunwasmRepository::new(),
        // );

        let app = app();

        let response = app
            .oneshot(Request::builder().uri("/").body(Body::empty()).unwrap())
            .await
            .unwrap();

        assert_eq!(response.status(), StatusCode::OK);
    }
}
