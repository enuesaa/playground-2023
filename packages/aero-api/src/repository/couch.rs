use couch_rs::types::find::FindQuery;
use couch_rs::Client;
use couch_rs::database::Database;
use couch_rs::document::DocumentCollection;
use serde_json::Value;

pub struct CouchRepository {
    host: String,
    username: String,
    password: String,
}
impl CouchRepository {
    pub fn new() -> Self {
        CouchRepository {
            host: "http://couch:5984".to_string(),
            username: "admin".to_string(),
            password: "admin".to_string(),
        }
    }

    pub fn client(&self) -> Client {
        couch_rs::Client::new(&self.host, &self.username, &self.password).unwrap()
    }

    pub async fn db(&self, name: &str) -> Database {
        self.client().db(name).await.unwrap()
    }

    pub async fn find_all(&self, name: &str) -> DocumentCollection<Value> {
        let db = self.db(name).await;
        let query = FindQuery::find_all();
        db.find_raw(&query).await.unwrap()
    }
}
