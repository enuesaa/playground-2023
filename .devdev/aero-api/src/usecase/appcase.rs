use crate::repository::couch::CouchRepository;
use crate::service::app::{App, AppService};
use crate::repository::runwasm::RunwasmRepository;
use crate::service::appversion::{Appversion, AppversionService};

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

    pub async fn list_appversions(&self, app_id: &str) -> Vec<Appversion> {
        AppversionService::list(self.couch(), app_id).await
    }

    pub async fn get_appversion(&self, id: &str) -> Appversion {
        AppversionService::get(self.couch(), id).await
    }

    pub async fn create_appversion(&self, appversion: Appversion) -> String {
        AppversionService::create(self.couch(), appversion).await
    }

    pub async fn invoke_appversion(&self, id: &str) {
        AppversionService::invoke(self.couch(), self.runwasm(), id).await;
    }
}
