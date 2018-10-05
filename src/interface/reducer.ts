import { Song } from '../songTypes'
import { Entities } from '../types'
import { Action, ActionType } from './actions'
import { initialState, State } from './state'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_CONFIG_AND_NAME_FROM_SONG: {
                const song: Song = action.data

                const stateWithUpdatedSongName: State = state
                    .set('songName', song.name)

                const stateWithUpdatedSongNameAndCustomConfig: State = stateWithUpdatedSongName
                    .set('customConfig', song.customConfig)

                const stateWithUpdatedSongNameAndCustomConfigAndStandardConfig: State =
                    stateWithUpdatedSongNameAndCustomConfig
                        .set('standardConfig', song.standardConfig)

                return stateWithUpdatedSongNameAndCustomConfigAndStandardConfig
            }
            case ActionType.SET_ENTITIES: {
                const entities: Entities = action.data

                return state
                    .set('entities', entities)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
