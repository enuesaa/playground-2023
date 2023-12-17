declare global {
  var wasmTinygoRegisterFn: (name: string, callback: (arg: any) => any) => void;
  var goWasmRoutes: {
    decodeJson: (arg: { text: string }) => string;
  }
}

// see https://zenn.dev/qnighy/articles/9c4ce0f1b68350
export {} 
