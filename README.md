# furoshiki-string-validator
string format checker

## usage
~~~ts
import { isInEnum } from 'furoshiki-string-validator';

const is = isInEnum({
  enum: ['aa', 'bb'],
  string: 'ac',
})
// is: false
~~~