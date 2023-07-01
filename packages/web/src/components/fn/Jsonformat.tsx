import { useAtomValue } from 'jotai'
import { fncoreAtom } from '@/lib/toolkit'
import { PageTitle } from '@/components/common/PageTitle'
import { useStyles } from '@/styles/use'
import { MouseEventHandler, useRef, useState } from 'react'

export const Jsonformat = () => {
  const fncore = useAtomValue(fncoreAtom)
  const [result, setResult] = useState<number | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const styles = useStyles((theme) => ({
    main: theme({ surf: 'main' }),
    textarea: theme({ decorate: 'card', around: 'x3' }).css({
      width: '80%',
      minHeight: '300px',
    }),
    hanldeConvertBtn: theme({ surf: 'reverse', size: 'x2', around: 'x2', decorate: 'rounded' }),
    display: theme({ around: 'x3', size: 'x3' }).css({ whiteSpace: 'pre-wrap' }),
  }))
  if (fncore === null) {
    return <></>
  }

  const handleCount: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const text = textareaRef.current?.value ?? ''
    /** @todo specify return type */
    const res = fncore.jsonformat(text)
    setResult(res)
  }

  return (
    <section css={styles.main}>
      <PageTitle title='Jsonformat' />
      <textarea css={styles.textarea} ref={textareaRef} />
      <button onClick={handleCount} css={styles.hanldeConvertBtn}>
        jsonformat
      </button>
      <div css={styles.display}>{result}</div>
    </section>
  )
}
