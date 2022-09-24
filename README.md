# furoshiki-matcher

## usecase
たくさんあるもののなかから、どれかひとつを選ぶもの
### 1. routing
### 2. cli command, args mapping

## example: inspired by rtk query
~~~ts
import { Matcher } from 'furoshiki-matcher'

export const matcher = new Matcher({
  definitions: {
    default: () => {},
    aaa: () => {},
    bbb: () => {},
  },
  matchHandler: () => {},
})

const result = matcher.match('aaa');
~~~

## why use furoshiki-matcher
1. for definition. enable to call default behaivior if something wrong with request string
2. 