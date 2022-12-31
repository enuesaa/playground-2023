type Packed = {
  card: any,
}
export const usePacked = (): Packed => {
  return {
    card: {
      className: 'a',
      style: {
        background: '#ff6633',
        borderRadius: '5px' 
      }
    }
  }
}
