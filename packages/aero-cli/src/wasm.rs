use wasmtime::*;

// see https://docs.rs/wasmtime/latest/wasmtime/
pub fn callwasm(wat: &str, handler: &str) -> wasmtime::Result<i32> {
    let engine = Engine::default();
    let mut store = Store::new(&engine, 0);

    // 実行可能な形式に
    let module = Module::new(&engine, wat)?;

    // rust のコードをimportできる?
    let instance = Instance::new(&mut store, &module, &[])?;

    let invoke = instance.get_typed_func::<(), i32>(&mut store, handler)?;
    let res = invoke.call(&mut store, ())?;
    Ok(res)
}

fn a() {
    let handler = "hello"; // aws lambda でいう lambda_handler に相当?
    let wat = r#"
        (module
            (func (export "hello") (result i32)
              i32.const 90
              return
            )
        )
    "#;
    let a = callwasm(wat, handler);
    println!("{:?}", a);
}
