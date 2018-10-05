import { Dispatch } from 'redux'
import { songLoop } from '../perform/songLoop'
import { Song } from '../songTypes'
import { Entity } from '../types'
import { ActionType } from './actions'

const recompileAndRestart: (song: Song, dispatch: Dispatch) => Promise<void> =
    async (song: Song, dispatch: Dispatch): Promise<void> => {
        const entities: Entity[] = await song.compile(song)
        dispatch({type: ActionType.SET_ENTITIES, data: entities})
        songLoop(entities)
    }

export {
    recompileAndRestart,
}
