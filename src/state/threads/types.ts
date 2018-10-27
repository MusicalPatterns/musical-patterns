import { List } from 'immutable'
import { Thread } from '../../types'

interface ImmutableThreads extends List<Thread> {}

enum ThreadsActionType {
    SET_THREADS = 'set threads',
}

interface SetThreads {
    data: ImmutableThreads,
    type: ThreadsActionType.SET_THREADS,
}

type ThreadsAction =
    SetThreads

export {
    ImmutableThreads,
    ThreadsAction,
    ThreadsActionType,
}
