import { fromJS, List } from 'immutable'
import { Thread } from '../types'

interface ImmutableThreads extends List<Thread> {}

// tslint:disable-next-line:no-unsafe-any
const initialThreads: ImmutableThreads = fromJS([])

export {
    initialThreads,
    ImmutableThreads,
}
