class Packed {
  public style: Record<string, string>

  constructor() {
    this.style = {}
  }

  width(value: string): this {
    this.style['width'] = value
    return this
  }

  darken(): this {
    this.style['background'] = '#1a1a1a'
    this.style['color'] = '#fafafa'
    return this
  }

  radii(): this {
    this.style['borderRadius'] = '10px'
    return this
  }
}

export const packed = (): Packed => new Packed()
