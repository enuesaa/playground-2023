use serde::{Serialize, Deserialize};

use crate::repository::couch::CouchRepository;
use crate::repository::runwasm::RunwasmRepository;

#[derive(Clone, Debug)]
#[derive(Serialize, Deserialize)]
pub struct App {
    pub id: Option<String>,
    pub name: Option<String>,
    pub description: Option<String>,
    pub saved: Option<String>, // path
}
impl App {
    pub fn new() -> Self {
        Self {
            id: Some("".to_string()),
            name: None,
            description: None,
            saved: None,
        }
    }

    pub fn get_id(&self) -> String {
        self.id.clone().unwrap()
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

    pub async fn invoke(couch: CouchRepository, runwasm: RunwasmRepository, id: &str) {
        let app = couch.get::<App>("apps", id).await;
        println!("{:?}", app);

        let handler = "hello"; // aws lambda でいう lambda_handler に相当?
        let wat = r#"
            (module
                (func (export "hello") (result i32)
                i32.const 90
                return
                )
            )
        "#;

        runwasm.run(wat, handler);
    }
}
