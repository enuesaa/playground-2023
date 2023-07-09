export type AppMessage = {
  source: 'kakkofn'
  text: any
}

export const isAppMessage = (event: MessageEvent<any>): event is MessageEvent<AppMessage> => {
  return typeof event.data === 'object' && typeof event.data?.text === 'string'
}
