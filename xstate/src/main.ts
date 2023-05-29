import { createMachine, interpret, assign } from 'xstate'

// // see https://xstate.js.org/docs/
// const toggleMachine = createMachine({
//   id: 'toggle',
//   initial: 'inactive',
//   states: {
//     inactive: { on: { TOGGLE: 'active' } },
//     active: { on: { TOGGLE: 'inactive' } }
//   }
// });

// const toggleActor = interpret(toggleMachine)
// toggleActor.subscribe((state) => {
//   console.log(state.value)
// })
// toggleActor.start()

// toggleActor.send({ type: 'TOGGLE' });
// toggleActor.send({ type: 'TOGGLE' });

// see https://stately.ai/viz
interface Context {
  retries: number;
}

const fetchMachine = createMachine<Context>({
  predictableActionArguments: true,
  id: 'fetch',
  initial: 'idle',
  context: {
    retries: 0
  },
  states: {
    idle: {
      on: {
        FETCH: {target: 'loading', actions: ['onFetch']},
      }
    },
    loading: {
      on: {
        RESOLVE: {target: 'success'},
        REJECT: {target: 'failure'},
      }
    },
    success: {
      type: 'final'
    },
    failure: {
      type: 'final',
    }
  }
}, {
  actions: {
    onFetch: () => {
      console.log('onfetch')
    }
  },
})

const fetchActor = interpret(fetchMachine)
fetchActor.subscribe((state) => {
  console.log(state.value)
})
fetchActor.start()
fetchActor.send('FETCH')
fetchActor.send('RESOLVE')
