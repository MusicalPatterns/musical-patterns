import { createStore, Store } from 'redux'
import { reducer } from './reducer'

const store: Store = createStore(reducer)

export {
    store,
}
