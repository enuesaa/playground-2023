import { useAtomValue } from 'jotai'
import { fncoreAtom } from '@/lib/fncore'
import { PageTitle } from '@/components/common/PageTitle'
import { useStyles } from '@/styles/use'
import { MouseEventHandler, useRef, useState } from 'react'

export const Count = () => {
  const fncore = useAtomValue(fncoreAtom)
  const [count, setCount] = useState<number | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const styles = useStyles((theme) => ({
    main: theme({ surf: 'main' }),
    textarea: theme({ decorate: 'card', around: 'x3' }).css({
      width: '80%',
      minHeight: '300px',
    }),
    hanldeCountBtn: theme({ surf: 'reverse', size: 'x2', around: 'x2', decorate: 'rounded' }),
    display: theme({ around: 'x3', size: 'x3' }),
  }))
  if (fncore === null) {
    return <></>
  }

  const handleCount: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const text = textareaRef.current?.value ?? ''
    /** @todo specify return type */
    const res = fncore.count(text)
    setCount(res)
  }

  return (
    <section css={styles.main}>
      <PageTitle title='Count' />
      <textarea css={styles.textarea} ref={textareaRef} />
      <button onClick={handleCount} css={styles.hanldeCountBtn}>
        count
      </button>
      <div css={styles.display}>{count}</div>
    </section>
  )
}
