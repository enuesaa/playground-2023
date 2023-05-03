use couch_rs::types::find::FindQuery;
use std::error::Error;

pub async fn connectest() -> &'static str {
    let _ = connect().await;

    "Hello, World!"
}

async fn connect() -> Result<(), Box<dyn Error>> {
    let client = couch_rs::Client::new("http://couch:5984", "admin", "admin")?;
    let db = client.db("apps").await?;
    let find_all = FindQuery::find_all();
    let docs = db.find_raw(&find_all).await?;
    println!("{:?}", docs);
    Ok(())
}
