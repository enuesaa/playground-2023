use clap::{Parser, Subcommand, ArgAction};
use crate::commands::list_apps::ListAppsArgs;
use crate::commands::describe_app::DescribeAppArgs;
use crate::commands::create_app::CreateAppArgs;
use crate::commands::update_app::UpdateAppArgs;
use crate::commands::delete_app::DeleteAppArgs;
use crate::commands::invoke::InvokeArgs;

#[derive(Parser)]
#[command(name = "aero-cli", about = "Aero management CLI.", long_about = None)]
#[clap(disable_help_subcommand = true, disable_help_flag = true)]
pub struct Cli {
    #[command(subcommand)]
    pub command: Commands,

    // see https://github.com/clap-rs/clap/issues/1127
    #[arg(long, action = ArgAction::Help, help = "information")]
    help: bool,
}

#[derive(Subcommand)]
pub enum Commands {
    ListApps(ListAppsArgs),
    DescribeApp(DescribeAppArgs),
    CreateApp(CreateAppArgs),
    UpdateApp(UpdateAppArgs),
    DeleteApp(DeleteAppArgs),
    Invoke(InvokeArgs),
}
