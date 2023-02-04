import { Header } from '@/components/common/Header'
import { LinkCard } from '@/components/common/LinkCard'
import { SideMenu } from '@/components/common/SideMenu'
import { Title } from '@/components/common/Title'
import { Box, Flex } from 'theme-ui'
import { css } from 'theme-ui'

export default function TopPage() {
  const styles = {
    flex: css({ display: 'flex' }),
    flexRight: css({ flex: '1 1 auto' })
  }

  return (
    <>
      <Header />
      <Flex css={styles.flex}>
        <SideMenu />
        <Box css={styles.flexRight}>
          <Title name='aaa' />
          <LinkCard href='/' name='aaa' />
        </Box>
      </Flex>
    </>
  )
}