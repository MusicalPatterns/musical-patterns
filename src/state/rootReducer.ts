import { Reducer } from 'redux'
import { combineReducers } from 'redux-immutable'
import { patternIdReducer } from './patternId'
import { threadsReducer } from './threads'
import { uiReducer } from './ui'

const rootReducer: Reducer = combineReducers({
    patternId: patternIdReducer,
    threads: threadsReducer,
    ui: uiReducer,
    // tslint:disable-next-line:no-any
} as any)

export {
    rootReducer,
}
