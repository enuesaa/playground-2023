use couch_rs::CouchDocument;
use couch_rs::types::document::DocumentId;
use couch_rs::document::{TypedCouchDocument, DocumentCollection};
use serde::{Serialize, Deserialize};

use crate::repository::couch::CouchRepository;
use crate::service::domain::WithMetadata;

#[derive(Clone, Debug)]
#[derive(Serialize, Deserialize, CouchDocument)]
pub struct App {
    #[serde(skip_serializing_if = "String::is_empty")]
    pub _id: DocumentId,

    #[serde(skip_serializing_if = "String::is_empty")]
    pub _rev: String,
    pub name: Option<String>,
    pub saved: Option<String>, // path
}

pub struct AppService {}
impl AppService {
    pub async fn list(couch: CouchRepository) -> Vec<App> {
        let docs = couch.find_all::<App>("apps").await;
        docs.rows
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
