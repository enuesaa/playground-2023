import { useMachine, normalizeProps } from '@zag-js/react'
import { machine, connect } from '@zag-js/toggle'

export const Toggle = () => {
  const [state, send] = useMachine(machine({
    id: '1',
  }))
  const api = connect(state, send, normalizeProps)

  return (
    <button {...api.buttonProps}>
      {api.isPressed ? 'On' : 'Off'}
    </button>
  )
}