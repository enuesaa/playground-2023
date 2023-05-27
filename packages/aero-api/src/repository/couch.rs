use couch_rs::types::find::FindQuery;
use couch_rs::Client;
use couch_rs::database::Database;
use couch_rs::document::DocumentCollection;
use serde_json::Value;
use couch_rs::document::TypedCouchDocument;
use async_trait::async_trait;

#[derive(Clone)]
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
}

// couchdb に関連するものは、このファイルで完結させる
// async trait は難しそう..

#[async_trait]
pub trait CouchTrait {
    fn client(&self) -> Client;
    async fn db(&self, name: &str) -> Database;
    async fn find_all<T: TypedCouchDocument>(&self, name: &str) -> Vec<T>;
    async fn find<T: TypedCouchDocument>(&self, name: &str) -> Vec<T>;
    async fn get<T: TypedCouchDocument>(&self, name: &str, id: &str) -> T;
    async fn create<T: TypedCouchDocument>(&self, name: &str, mut data: T) -> String;
    async fn delete<T: TypedCouchDocument>(&self, name: &str, id: &str);
}

#[async_trait]
impl CouchTrait for CouchRepository {
    
    fn client(&self) -> Client {
        couch_rs::Client::new(&self.host, &self.username, &self.password).unwrap()
    }

    async fn db(&self, name: &str) -> Database {
        self.client().db(name).await.unwrap()
    }

    async fn find_all<T: TypedCouchDocument>(&self, name: &str) -> Vec<T> {
        let db = self.db(name).await;
        let query = FindQuery::find_all();
        let docs = db.find::<T>(&query).await.unwrap();
        docs.rows
    }

    async fn find<T: TypedCouchDocument>(&self, name: &str) -> Vec<T> {
        todo!()
        // use couch_rs::types::find::FindQuery
    }

    async fn get<T: TypedCouchDocument>(&self, name: &str, id: &str) -> T {
        let db = self.db(name).await;
        db.get::<T>(id).await.unwrap()
    }

    // インタフェースが悪そう
    async fn create<T: TypedCouchDocument>(&self, name: &str, mut data: T) -> String {
        let db = self.db(name).await;
        let details = db.create(&mut data).await;
        details.unwrap().id
    }

    async fn delete<T: TypedCouchDocument>(&self, name: &str, id: &str) {
        let db = self.db(name).await;
        if let Some(doc) = db.get::<T>(id).await.ok() {
            db.remove(&doc).await;
        }
    }
}
