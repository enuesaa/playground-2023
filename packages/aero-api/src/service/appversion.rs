use couch_rs::CouchDocument;
use couch_rs::types::document::DocumentId;
use couch_rs::document::TypedCouchDocument;
use serde::{Serialize, Deserialize};

use crate::repository::{couch::CouchRepository, runwasm::RunwasmRepository};

#[derive(Clone, Debug)]
#[derive(Serialize, Deserialize, CouchDocument)]
pub struct Appversion {
    #[serde(skip_serializing_if = "String::is_empty")]
    pub _id: DocumentId,
    #[serde(skip_serializing_if = "String::is_empty")]
    pub _rev: String,

    pub app_id: Option<String>,
    pub handler: Option<String>,
    pub wat: Option<String>,
}
impl Appversion {
    pub fn new() -> Self {
        Self {
            _id: "".to_string(),
            _rev: "".to_string(),
            app_id: None,
            handler: None,
            wat: None,
        }
    }

    pub fn get_id(&self) -> String {
        self._id.clone()
    }

    pub fn set_app_id(&mut self, app_id: &str) {
        self.app_id = Some(app_id.to_string());
    }

    pub fn get_app_id(&self) -> String {
        self.app_id.clone().unwrap_or("".to_string())
    }

    pub fn set_handler(&mut self, handler: &str) {
        self.handler = Some(handler.to_string());
    }

    pub fn get_handler(&self) -> String {
        self.handler.clone().unwrap_or("".to_string())
    }

    pub fn set_wat(&mut self, wat: &str) {
        self.wat = Some(wat.to_string());
    }

    pub fn get_wat(&self) -> String {
        self.wat.clone().unwrap_or("".to_string())
    }
}

pub struct AppversionService {}
impl AppversionService {
    pub async fn list(couch: CouchRepository, app_id: &str) -> Vec<Appversion> {
        couch.find_all::<Appversion>("appversions").await
    }
    
    pub async fn get(couch: CouchRepository, id: &str) -> Appversion {
        couch.get::<Appversion>("appversions", id).await
    }
    
    pub async fn create(couch: CouchRepository, appversion: Appversion) -> String {
        couch.create::<Appversion>("appversions", appversion).await
    }

    pub async fn delete(couch: CouchRepository, id: &str) {
        couch.delete::<Appversion>("appversions", id).await;
    }

    pub async fn invoke(couch: CouchRepository, runwasm: RunwasmRepository, id: &str) {
        let appversion = couch.get::<Appversion>("appversions", id).await;
        println!("{:?}", appversion);

        runwasm.run(&appversion.get_wat(), &appversion.get_handler());
    }
}
