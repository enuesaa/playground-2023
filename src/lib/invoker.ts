export type Invoker = {
  source: 'kakkofn'
  text: any

  path: string
  request: any
  response: any
}

export const isIncludeInvoker = (event: MessageEvent<any>): event is MessageEvent<Invoker> => {
  return typeof event.data === 'object' && typeof event.data?.text !== 'undefined'
}
