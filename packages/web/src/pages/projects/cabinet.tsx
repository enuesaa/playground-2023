import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'

export default function TopPage() {
  /**
   * {
   *   "resources": [
   *      { "text": "aa", "actions": { "click": "addTodo" } },
   *   ],
   *   "actions": {
   *      "addTodo": {
   *          "method": "post",
   *          "path": "/api/todos",
   *      }
   *   },
   * }
   */

  return (
    <Title name='cabinet' />
  )
}
