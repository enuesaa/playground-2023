
  /**
   * - emotionベース
   * - emotionの一つ上のレイヤー. uitlity functionライクな薄いレイヤー.
   * 
   */
  /**
   * グローバルで定義しても違和感が少ないもの (グローバルに書いた方が良い、という訳ではない)
   * - input周りのreset css
   * 
   * 他へ影響があるもの ... styled へ
   * - margin ... <Space height='100%' width='100%'>
   * - display ... <span> <InlineBlock> <div> <Flex> <FlexBasis basis=''>
   * - position ... <Relative> <Absolute> <Fixed>
   * 
   * 親要素`のみ`が定義し子要素では定義すべきでないこと
   * - height(絶対値)
   * - width(絶対値)
   * 
   * 当該要素で定義すべきもの
   * - 基本 margin: 0, padding: 0, fontSize: normal, width: auto, height: auto
   * 
   * - [surf]
   *   - color
   *   - background
   * 
   * - [size]
   *   - font size
   *   - font weight
   *   - padding
   * 
   * - [decorate]
   *   - border
   *   - border radius
   *   - box shadow
   * 
   * - line height
   * - width
   * - height
   * - vertical align
   * - cursor
   */

  /**
   * Layer
   * - Basic Theme
   * - Property Combination // builder like // with cache
   * - styled
   */

  /**
   * 
   * // できれば css() を packed() で隠蔽したい
   * const styles = {
   *   card: css(packed({ surf: 'reverse', size: 'x3', decorate: 'b')),
   * }
   */

  /**
   * @todo どこにmappingを定義するか
   * 
   * 
   */

const mapping = {
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

type PackedAttrs = {
  surf: null | string;
  size: null | string;
  decorate: null | string;
}
export const packed = ({ surf, size, decorate }: PackedAttrs) => {
  return {
    margin: '0',
    padding: '0',
    width: 'auto',
    height: 'auto',
    // @ts-ignore
    ...mapping.surf[surf] ?? {}, ...mapping.size[size], ...mapping.decorate[decorate]
  }
}