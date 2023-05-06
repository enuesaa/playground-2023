use couch_rs::CouchDocument;
use couch_rs::types::document::DocumentId;
use couch_rs::document::TypedCouchDocument;
use serde::{Serialize, Deserialize};

use crate::repository::couch::CouchRepository;

#[derive(Clone, Debug)]
#[derive(Serialize, Deserialize, CouchDocument)]
pub struct App {
    #[serde(skip_serializing_if = "String::is_empty")]
    pub _id: DocumentId,
    #[serde(skip_serializing_if = "String::is_empty")]
    pub _rev: String,

    pub name: Option<String>,
    pub description: Option<String>,
    pub saved: Option<String>, // path
}
impl App {
    pub fn new() -> Self {
        Self {
            _id: "".to_string(),
            _rev: "".to_string(),
            name: None,
            description: None,
            saved: None,
        }
    }

    pub fn get_id(&self) -> String {
        self._id.clone()
    }

    pub fn get_name(&self) -> String {
        self.name.clone().unwrap_or("".to_string())
    }

    pub fn set_name(&mut self, name: &str) {
        self.name = Some(name.to_string());
    }

    pub fn get_description(&self) -> String {
        self.description.clone().unwrap_or("".to_string())
    }

    pub fn set_description(&mut self, description: &str) {
        self.description = Some(description.to_string());
    }

    pub fn get_saved(&self) -> String {
        self.saved.clone().unwrap_or("".to_string())
    }

    pub fn set_saved(&mut self, saved: &str) {
        self.saved = Some(saved.to_string());
    }
}

pub struct AppService {}
impl AppService {
    pub async fn list(couch: CouchRepository) -> Vec<App> {
        couch.find_all::<App>("apps").await
    }
    
    pub async fn get(couch: CouchRepository, id: &str) -> App {
        couch.get::<App>("apps", id).await
    }
    
    pub async fn create(couch: CouchRepository, app: App) -> String {
        couch.create::<App>("apps", app).await
    }

    pub async fn delete(couch: CouchRepository, id: &str) {
        couch.delete::<App>("apps", id).await;
    }
}
