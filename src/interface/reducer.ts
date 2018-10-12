import { Song } from '../songTypes'
import { Entities } from '../types'
import { Action, ActionType } from './actions'
import { initialState, State, StringifiedConfig, StringifiedConfigStates } from './state'
import { stringifyConfig } from './stringifyConfig'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_SONG_AND_STRINGIFIED_CONFIGS_FROM_SONG: {
                const song: Song = action.data

                const stringifiedConfig: StringifiedConfig = stringifyConfig(song.config)

                return state
                    .set('song', song)
                    .set('displayedConfig', stringifiedConfig)
                    .set('submittedConfig', stringifiedConfig)
            }
            case ActionType.SET_SUBMITTED_CONFIG: {
                const submittedConfig: StringifiedConfig = action.data

                return state
                    .set('submittedConfig', submittedConfig)
            }
            case ActionType.SET_STRINGIFIED_CONFIG: {
                const displayedConfig: StringifiedConfig = action.data

                return state
                    .set('displayedConfig', displayedConfig)
            }
            case ActionType.SET_ENTITIES: {
                const entities: Entities = action.data

                return state
                    .set('entities', entities)
            }
            case ActionType.SET_INVALID_INPUTS: {
                const invalidConfigInputs: StringifiedConfigStates = action.data

                return state
                    .set('invalidConfigInputs', invalidConfigInputs)
            }
            case ActionType.SET_UNSUBMITTED_INPUTS: {
                const unsubmittedConfigInputs: StringifiedConfigStates = action.data

                return state
                    .set('unsubmittedConfigInputs', unsubmittedConfigInputs)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
