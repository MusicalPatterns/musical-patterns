import { Action, ActionType } from '../actions'
import { initialThreads } from './state'
import { ImmutableThreads } from './types'

const threadsReducer: (threads: ImmutableThreads, action: Action) => ImmutableThreads =
    (threads: ImmutableThreads = initialThreads, action: Action): ImmutableThreads => {
        switch (action.type) {
            case ActionType.SET_THREADS: {
                return action.data
            }

            default: {
                return threads
            }
        }
    }

export {
    threadsReducer,
}
