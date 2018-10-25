import { List } from 'immutable'
import { Thread } from '../types'

const initialThreads: ImmutableThreads = List([])

type ImmutableThreads = List<Thread>

export {
    initialThreads,
    ImmutableThreads,
}
