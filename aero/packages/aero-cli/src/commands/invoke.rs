use clap::{Args};

#[derive(Debug, Args)]
pub struct InvokeArgs {
    #[arg(long)]
    app: String,
    #[arg(long)]
    body: String, // json
}
