import { initialThreads } from './state'
import { ImmutableThreads, ThreadsAction, ThreadsActionType } from './types'

const threadsReducer: (threads: ImmutableThreads, action: ThreadsAction) => ImmutableThreads =
    (threads: ImmutableThreads = initialThreads, action: ThreadsAction): ImmutableThreads => {
        switch (action.type) {
            case ThreadsActionType.SET_THREADS: {
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
