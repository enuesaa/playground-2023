use crate::repository::couch::CouchRepository;
use crate::service::app::{App, AppService};

#[derive(Clone)]
pub struct Appcase {
    couch: CouchRepository,
}
impl Appcase {
    pub fn new(couch: CouchRepository) -> Self {
        Appcase { couch }
    }

    fn couch(&self) -> CouchRepository {
        self.couch.clone()
    }

    pub async fn list_apps(&self) -> Vec<App> {
        AppService::list(self.couch()).await
    }

    pub async fn get_app(&self, id: &str) -> App {
        AppService::get(self.couch(), id).await
    }

    pub async fn create_app(&self, app: App) -> String {
        AppService::create(self.couch(), app).await
    }

    pub async fn delete_app(&self, id: &str) {
        AppService::delete(self.couch(), id).await;
    }
}
