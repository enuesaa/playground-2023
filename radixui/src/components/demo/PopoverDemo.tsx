import * as Popover from '@radix-ui/react-popover'
import styles from '@/components/demo/styles.module.css'

export const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className={styles.PopoverTrigger}>Show info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={styles.PopoverContent}>
        Some content
        <Popover.Arrow className={styles.PopoverAllow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)
