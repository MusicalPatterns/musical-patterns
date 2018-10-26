import { fromJS } from 'immutable'
import { ImmutableThreads } from './types'

// tslint:disable-next-line:no-unsafe-any
const initialThreads: ImmutableThreads = fromJS([])

export {
    initialThreads,
}
