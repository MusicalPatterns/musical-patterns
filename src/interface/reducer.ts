import { Song } from '../songTypes'
import { Entities } from '../types'
import { Action, ActionType } from './actions'
import { initialState, State } from './state'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_SONG: {
                const song: Song = action.data

                return state
                    .set('song', song)

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
