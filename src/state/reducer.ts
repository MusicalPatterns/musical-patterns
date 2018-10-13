import { Song } from '../songTypes'
import { Entities } from '../types'
import { stringifyConfig } from '../ui/stringifyConfig'
import { Action, ActionType } from './actions'
import { initialState, State, StringifiedConfig, StringifiedConfigStates, UI } from './state'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_SONG_AND_STRINGIFIED_CONFIGS_FROM_SONG: {
                const song: Song = action.data

                const stringifiedConfig: StringifiedConfig = stringifyConfig(song.config)
                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, displayedConfig: stringifiedConfig, submittedConfig: stringifiedConfig }

                return state
                    .set('song', song)
                    .set('ui', updatedUI)

            }
            case ActionType.SET_SUBMITTED_CONFIG: {
                const submittedConfig: StringifiedConfig = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, submittedConfig }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_STRINGIFIED_CONFIG: {
                const displayedConfig: StringifiedConfig = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, displayedConfig }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_ENTITIES: {
                const entities: Entities = action.data

                return state
                    .set('entities', entities)
            }
            case ActionType.SET_INVALID_INPUTS: {
                const invalidConfigInputs: StringifiedConfigStates = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, invalidConfigInputs }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_UNSUBMITTED_INPUTS: {
                const unsubmittedConfigInputs: StringifiedConfigStates = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, unsubmittedConfigInputs }

                return state
                    .set('ui', updatedUI)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
