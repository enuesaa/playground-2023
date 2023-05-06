use crate::repository::couch::CouchRepository;
use crate::service::app::{App, AppService};
use crate::repository::runwasm::RunwasmRepository;

#[derive(Clone)]
pub struct Appcase {
    couch: CouchRepository,
    runwasm: RunwasmRepository,
}
impl Appcase {
    pub fn new(couch: CouchRepository, runwasm: RunwasmRepository) -> Self {
        Appcase { couch, runwasm }
    }

    fn couch(&self) -> CouchRepository {
        self.couch.clone()
    }

    fn runwasm(&self) -> RunwasmRepository {
        // インフラに依存しない runner なので di する意味はない気がする
        self.runwasm.clone()
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

    pub async fn invoke_app(&self, id: &str) {
        AppService::invoke(self.couch(), self.runwasm(), id);
    }
}
