// tslint:disable:no-any no-unsafe-any

import { Map } from 'immutable'
import { applyMiddleware, compose, createStore, Reducer, Store } from 'redux'
import { batchDispatchMiddleware, enableBatching } from 'redux-batched-actions'
import { combineReducers } from 'redux-immutable'
import { patternIdReducer } from './patternId'
import { patternSpecReducer } from './patternSpec'
import { performanceReducer } from './performance'

const initialState: any = Map()

const rootReducer: Reducer = combineReducers({
    patternId: patternIdReducer,
    patternSpec: patternSpecReducer,
    performance: performanceReducer,
} as any)

// @ts-ignore
const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store: Store = createStore(
    enableBatching(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(batchDispatchMiddleware)),
)

export {
    store,
    rootReducer,
}
