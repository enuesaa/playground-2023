use clap::Args;

#[derive(Debug, Args)]
pub struct UpdateAppArgs {
    #[arg(long)]
    name: String,

    #[arg(long)]
    source: String,

    #[arg(long)]
    handler: String,
}
