export const def = {
  surf: {
    // 仮に値を変えるとしても影響範囲がわかりやすい.
    main: {
      color: '#111111',
      background: '#fafafa',
    },
    sub: {
      color: '#cccccc',
      background: '#fafafa',
    },
    reverse: {
      color: '#fafafa',
      background: '#111111',
    },
    transparent: {
      color: 'none',
      background: 'transparent',
    }
  },
  size: {
    // padding はついで.. 
    x1: {
      fontSize: '16px',
      fontWeight: '400',
      padding: '2px 5px',
    },
    x2: {
      fontSize: '20px',
      fontWeight: '600',
      padding: '5px 10px',
    },
    x3: {
      fontSize: '25px',
      fontWeight: '800',
      padding: '10px 15px',
    },
  },
  decorate: {
    // どこで使われているかわかるんじゃないか..  
    a: {
      border: 'none',
      borderRadius: '0',
      boxShadow: 'none',
    },
    b: {
      border: 'none',
      borderRadius: '10px',
      boxShadow: 'none',
    }
  }
}
