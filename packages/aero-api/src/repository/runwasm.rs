use wasmtime::*;

#[derive(Clone)]
pub struct RunwasmRepository {}
impl RunwasmRepository {
    pub fn new() -> Self {
        RunwasmRepository { }
    }

    pub fn engine(&self) -> Engine {
        Engine::default()
    }

    // see https://docs.rs/wasmtime/latest/wasmtime/
    fn call(&self, wat: &str, handler: &str) -> wasmtime::Result<i32> {
        let engine = self.engine();
        let mut store = Store::new(&engine, 0);
    
        // 実行可能な形式に
        let module = Module::new(&engine, wat)?;
    
        // rust のコードをimportできる?
        let instance = Instance::new(&mut store, &module, &[])?;
    
        let invoke = instance.get_typed_func::<(), i32>(&mut store, handler)?;
        let res = invoke.call(&mut store, ())?;
        Ok(res)
    }

    pub fn run(&self, wat: &str, handler: &str) {
        let res = self.call(wat, handler);
        println!("{:?}", res);
    }
}
