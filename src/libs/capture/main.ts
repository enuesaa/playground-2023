import html2canvas from 'html2canvas'

export const captureToBase64 = async (target: HTMLElement): Promise<string> => {
  const canvas = await html2canvas(target)
  return canvas.toDataURL('img/png')
}
