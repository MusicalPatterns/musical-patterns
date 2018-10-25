import { Reducer } from 'redux'
import { combineReducers } from 'redux-immutable'
import { songIdReducer } from './songIdReducer'
import { threadsReducer } from './threadsReducer'
import { uiReducer } from './uiReducer'

const rootReducer: Reducer = combineReducers({
    songId: songIdReducer,
    threads: threadsReducer,
    ui: uiReducer,
    // tslint:disable-next-line:no-any
} as any)

export {
    rootReducer,
}
