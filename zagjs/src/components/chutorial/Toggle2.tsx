import { createMachine } from "@zag-js/core"
import { useMachine } from "@zag-js/react"

const machine = createMachine({
  // initial state
  initial: "active",
  // the finite states
  states: {
    active: {
      on: {
        CLICK: {
          // go to inactive
          target: "inactive",
        },
      },
    },
    inactive: {
      on: {
        CLICK: {
          // go to active
          target: "active",
        },
      },
    },
  },
})

function connect(state, send) {
  const active = state.matches("active")
  return {
    active,
    buttonProps: {
      type: "button",
      role: "switch",
      "aria-checked": active,
      onClick() {
        send("CLICK")
      },
    },
  }
}

export const Toggle2 = () => {
  const [state, send] = useMachine(machine)
  const api = connect(state, send)

  return (
    <button
      {...api.buttonProps}
      style={{
        width: "40px",
        height: "24px",
        borderRadius: "999px",
        background: api.active ? "green" : "gray",
      }}
    >
      {api.active ? "ON" : "OFF"}
    </button>
  )
}
