use crate::repository::couch::CouchRepository;
use crate::service::domain::WithMetadata;
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
}
