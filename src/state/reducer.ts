import { Song, SongConfig } from '../songTypes'
import { Action, ActionType } from './actions'
import { initialState, State, StringifiedConfig, StringifiedConfigStates, UI } from './state'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_SUBMITTED_CONFIG: {
                const submittedConfig: StringifiedConfig = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, submittedConfig }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_DISPLAYED_CONFIG: {
                const displayedConfig: StringifiedConfig = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, displayedConfig }

                return state
                    .set('ui', updatedUI)
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
            case ActionType.SET_SONG: {
                const song: Song = action.data

                return state
                    .set('song', song)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
