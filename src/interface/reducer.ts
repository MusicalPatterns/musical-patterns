import { Song } from '../songTypes'
import { Entity } from '../types'
import { Action, ActionType } from './actions'
import { initialState, State } from './state'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_CONFIG_AND_NAME_FROM_SONG: {
                const song: Song = action.data

                const stateWithUpdatedSongName: State = state.set('songName', song.name)

                return stateWithUpdatedSongName.set('config', song.config || {})
            }
            case ActionType.SET_ENTITIES: {
                const entities: Entity[] = action.data

                return state.set('entities', entities)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
