import { useAtomValue } from 'jotai'
import { fncoreAtom } from '@/lib/fncore'
import { PageTitle } from '@/components/common/PageTitle'
import { useStyles } from '@/styles/use'
import { MouseEventHandler, useRef, useState } from 'react'

export const Replace = () => {
  const fncore = useAtomValue(fncoreAtom)
  const [replaced, setReplaced] = useState<number | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fromRef = useRef<HTMLInputElement>(null)
  const toRef = useRef<HTMLInputElement>(null)

  const styles = useStyles(theme => ({
    main: theme({ surf: 'main' }),
    textarea: theme({ decorate: 'card', around: 'x3' }).css({
      width: '80%',
      minHeight: '300px',
    }),
    input: theme({ decorate: 'card', around: 'x2' }).css({
      width: '80%',
      display: 'block',
    }),
    handleReplaceBtn: theme({ surf: 'reverse', size: 'x2', around: 'x2', decorate: 'rounded' }),
    display: theme({ around: 'x3', size: 'x3' })
  }))
  if (fncore === null) {
    return <></>
  }

  const handleCount: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    /** @todo use react hook form */
    const text = textareaRef.current?.value ?? '';
    const from = fromRef.current?.value ?? '';
    const to = toRef.current?.value ?? '';
    /** @todo specify return type */
    const res = fncore.replace(text, from, to)
    setReplaced(res)
  }

  return (
    <section css={styles.main}>
      <PageTitle title='Replace' />
      <textarea css={styles.textarea} ref={textareaRef} />
      <input type='text' css={styles.input} ref={fromRef} placeholder='from' />
      <input type='text' css={styles.input} ref={toRef} placeholder='to' />
      <button onClick={handleCount} css={styles.handleReplaceBtn}>replace</button>
      <div css={styles.display}>
        {replaced}
      </div>
    </section>
  )
}