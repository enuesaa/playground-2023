import { PageTitle } from '@/components/common/PageTitle'
import { useStyles } from '@/styles/use'
import { MouseEventHandler, useRef, useState } from 'react'

export const WasmValidator = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isWasmValid, setIsWasmValid] = useState<boolean | null>(null)

  const styles = useStyles((theme) => ({
    main: theme({ surf: 'main' }),
    textarea: theme({ decorate: 'card', around: 'x3' }).css({
      width: '80%',
      minHeight: '300px',
    }),
    handleValidateBtn: theme({ surf: 'reverse', size: 'x2', around: 'x2', decorate: 'rounded' }),
    display: theme({ around: 'x3', size: 'x3' }),
  }))

  const handleValidate: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    /** @todo use react hook form */
    const text = textareaRef.current?.value ?? ''
    /** @see https://stackoverflow.com/questions/6965107/converting-between-strings-and-arraybuffers */
    const enc = new TextEncoder()
    const buf = enc.encode(text)
    // wat ではないらしい
    const is = WebAssembly.validate(buf)
    setIsWasmValid(is)
  }

  return (
    <section css={styles.main}>
      <PageTitle title='WasmValidator' />
      <textarea css={styles.textarea} ref={textareaRef} />
      <button onClick={handleValidate} css={styles.handleValidateBtn}>
        replace
      </button>
      <div css={styles.display}>{isWasmValid === null ? '' : isWasmValid ? 'ok' : 'invalid'}</div>
    </section>
  )
}
