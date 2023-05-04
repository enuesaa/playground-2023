use crate::repository::couch::CouchRepository;
use crate::service::domain::WithMetadata;

#[derive(Clone)]
pub struct App {
    name: String,
    saved: Option<String>, // path
}

pub struct AppService {}
impl AppService {
    pub fn list(couch: CouchRepository) -> Vec<WithMetadata<App>> {
        let docs = couch.find_all("apps");
        todo!()
    }
    
    pub fn get(couch: CouchRepository, id: &str) -> WithMetadata<App> {
        todo!()
    }
    
    pub fn create(couch: CouchRepository, app: App) -> String {
        todo!()
    }

    pub fn update(couch: CouchRepository, id: &str, app: App) -> String {
        todo!()
    }

    pub fn delete(couch: CouchRepository, id: &str) {
        todo!()
    }
}
