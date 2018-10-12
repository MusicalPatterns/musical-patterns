import { Song } from '../songTypes'
import { Entities } from '../types'
import { Action, ActionType } from './actions'
import { initialState, InterfaceConfig, InterfaceConfigValidities, State } from './state'
import { stringifyConfig } from './stringifyConfig'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_SONG_AND_INTERFACE_CONFIG_FROM_SONG: {
                const song: Song = action.data

                const stringifiedConfig: InterfaceConfig = stringifyConfig(song.config)

                return state
                    .set('song', song)
                    .set('interfaceConfig', stringifiedConfig)
                    .set('actualCurrentConfig', stringifiedConfig)
            }
            case ActionType.SET_ACTUAL_CURRENT_CONFIG: {
                const actualCurrentConfig: InterfaceConfig = action.data

                return state
                    .set('actualCurrentConfig', actualCurrentConfig)
            }
            case ActionType.SET_INTERFACE_CONFIG: {
                const interfaceConfig: InterfaceConfig = action.data

                return state
                    .set('interfaceConfig', interfaceConfig)
            }
            case ActionType.SET_ENTITIES: {
                const entities: Entities = action.data

                return state
                    .set('entities', entities)
            }
            case ActionType.MARK_INPUT_INVALID: {
                const inputName: string = action.data

                const invalidInputs: InterfaceConfigValidities = state.get('invalidInputs')
                const updatedInvalidInputs: InterfaceConfigValidities = { ...invalidInputs, [ inputName ]: true }

                return state
                    .set('invalidInputs', updatedInvalidInputs)
            }
            case ActionType.MARK_INPUT_VALID: {
                const inputName: string = action.data

                const invalidInputs: InterfaceConfigValidities = state.get('invalidInputs')
                const updatedInvalidInputs: InterfaceConfigValidities = { ...invalidInputs, [ inputName ]: false }

                return state
                    .set('invalidInputs', updatedInvalidInputs)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
