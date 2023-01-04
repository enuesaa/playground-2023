use wry::{
  application::{
    dpi::{LogicalSize},
    event::{Event, StartCause, WindowEvent},
    event_loop::{ControlFlow, EventLoop},
    window::WindowBuilder,
  },
  webview::WebViewBuilder,
};
enum UserEvent {
  Navigation(String),
}

fn main() -> wry::Result<()> {
  // https://github.com/tauri-apps/wry/blob/dev/examples/navigation_event.rs
  let event_loop: EventLoop<UserEvent> = EventLoop::with_user_event();
  let proxy = event_loop.create_proxy();
  let window = WindowBuilder::new()
    .with_title("wry")
    .with_inner_size(LogicalSize::new(700, 1000))
    .build(&event_loop)?;
  
  let user_agent_string = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1";
  let mut histories: Vec<String> = Vec::new();

  let webview = WebViewBuilder::new(window)?
    .with_user_agent(&user_agent_string)
    .with_navigation_handler(move |uri: String| {
      proxy.send_event(UserEvent::Navigation(uri.clone())).is_ok() || true
    })
    .with_url("https://yahoo.co.jp")?
    .build()?;
  
  let scale_factor = 1.9;
  webview.zoom(scale_factor);

  event_loop.run(move |event, _, control_flow| {
    *control_flow = ControlFlow::Wait;

    match event {
      Event::NewEvents(StartCause::Init) => println!("Wry has started!"),
      Event::WindowEvent {
        event: WindowEvent::CloseRequested,
        ..
      } => {
        println!("{:?}", histories);
        *control_flow = ControlFlow::Exit
      },
      Event::UserEvent(UserEvent::Navigation(uri)) => {
        histories.push(uri.clone())
      },
      _ => (),
    }
  });
}
