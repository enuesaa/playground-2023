#[derive(Debug)]
pub struct WithMetadata<T: Clone> {
    id: String,
    created: String,
    updated: String,
    data: T,
}
impl<T: Clone> WithMetadata<T> {
    pub fn get_id(&self) -> String {
        self.id.clone()
    }

    pub fn get_created(&self) -> String {
        self.created.clone()
    }

    pub fn get_updated(&self) -> String {
        self.updated.clone()
    }

    pub fn get_data(&self) -> T {
        self.data.clone()
    }
}
