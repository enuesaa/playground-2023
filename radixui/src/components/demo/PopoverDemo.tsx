import { Root, Trigger, Content, Portal, Arrow } from '@radix-ui/react-popover'
import { css } from '@emotion/react'

export const PopoverDemo = () => {
  const styles = {
    trigger: css({
      background: '#fafafa',
      borderRadius: '5px',
    }),
    content: css({
      borderRadius: '5px',
      padding: '20px',
      width: '260px',
      background: '#fafafa',
    }),
    arrow: css({
      fill: '#fafafa',
    })
  }

  return (
    <Root>
      <Trigger css={styles.trigger}>Show info</Trigger>
      <Portal>
        <Content css={styles.content}>
          Some content
          <Arrow css={styles.arrow} />
        </Content>
      </Portal>
    </Root>
  )
}
