import { Reducer } from 'redux'
import { combineReducers } from 'redux-immutable'
import { songIdReducer } from './songId'
import { threadsReducer } from './threads'
import { uiReducer } from './ui'

const rootReducer: Reducer = combineReducers({
    songId: songIdReducer,
    threads: threadsReducer,
    ui: uiReducer,
    // tslint:disable-next-line:no-any
} as any)

export {
    rootReducer,
}
