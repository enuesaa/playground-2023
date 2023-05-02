use crate::cli::Commands;

pub fn route(name: Commands) {
    match name {
        Commands::ListApps(args) => {
            println!("list {:?}", args);
        },
        Commands::DescribeApp(args) => {
            println!("describe {:?}", args);
        },
        Commands::CreateApp(args) => {
            println!("create {:?}", args);
        },
        Commands::UpdateApp(args) => {
            println!("update {:?}", args);
        },
        Commands::DeleteApp(args) => {
            println!("delete {:?}", args);
        },
        Commands::Invoke(args) => {
            println!("invoke {:?}", args);
        },
    }
}
