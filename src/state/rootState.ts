import { SongID } from '../songIds'
import { Maybe } from '../utilities/types'
import { TypedMap } from './immutablize'
import { ImmutableThreads } from './threadsState'
import { ImmutableUI } from './uiState'

interface RootState {
    songId: Maybe<SongID>,
    threads: ImmutableThreads,
    ui: ImmutableUI,
}
type ImmutableRootState = TypedMap<RootState>

export {
    ImmutableRootState,
}
