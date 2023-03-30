use rocksdb::DB;

fn main() {
    let db = DB::open_default("rocksdb").unwrap();

    // set
    // let _ = db.put(b"aaa", b"bbb");

    // get
    // let res = db.get(b"aaa");
    // if let Ok(Some(value)) = res {
    //     let valstr = String::from_utf8(value).unwrap();
    //     println!("{:?}", valstr);
    // }

    let mut iter = db.raw_iterator();
    iter.seek(b"a");

    if iter.valid() {
        if let (Some(key), Some(value)) = (iter.key(), iter.value()) {
            println!("{:?} {:?}", String::from_utf8(Vec::from(key)), String::from_utf8(Vec::from(value)));
        }
    }; 
}