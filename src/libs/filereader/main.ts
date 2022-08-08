export const readFile = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function() {
      const res = (typeof reader.result === 'string')? reader.result : ''
      resolve(res)
    }
  })
}