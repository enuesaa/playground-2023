use rocksdb::DB;

fn main() {
    let db = DB::open_default("rocksdb").unwrap();

    // set
    // let _ = db.put(b"aaa", b"value");

    // get
    let res = db.get(b"aaa");
    if let Ok(Some(value)) = res {
        let valstr = String::from_utf8(value).unwrap();
        println!("{:?}", valstr);
    }
}