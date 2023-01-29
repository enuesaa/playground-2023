type Definition = {}
type Definitions = Record<string, Definition>
type MatchHandler = () => boolean
export class Matcher {
  definitions: Definitions
  matchHandler: MatchHandler

  constructor({ definitions, matchHandler }: Partial<{ definitions: Definitions; matchHandler: MatchHandler }>) {
    this.definitions = definitions ?? {}
    this.matchHandler = matchHandler ?? (() => true)
  }

  addDefinition(name: string, definition: Definition): Matcher {
    this.definitions[name] = definition
    return this
  }

  defineMatchHandler(matchHandler: MatchHandler): Matcher {
    this.matchHandler = matchHandler
    return this
  }

  match(value: string): any {
    // match handler
    return this.definitions[value]
  }
}

const matcher = new Matcher({
  definitions: {
    default: { aa: 'bb' },
    aaa: { aa: 'cc' },
    bbb: { aa: 'dd' },
  },
  matchHandler: () => true,
})

const result = matcher.match('aaa')
console.log(result)
