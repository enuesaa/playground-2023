use crate::repository::couch::CouchRepository;
use crate::service::domain::WithMetadata;
use crate::service::app::App;

pub struct Appcase {
    couch: CouchRepository,
}
impl Appcase {
    pub fn new(couch: CouchRepository) -> Self {
        Appcase { couch }
    }

    pub fn list_apps(&self) -> Vec<WithMetadata<App>> {
        todo!()
    }
}