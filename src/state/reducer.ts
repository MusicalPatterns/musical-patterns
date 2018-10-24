import { SongID } from '../songIds'
import { Threads } from '../types'
import { Action, ActionType } from './actions'
import { initialState, State, StringifiedSongSpec, StringifiedSongSpecInputStates, UI } from './state'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_SUBMITTED_SONG_SPEC: {
                const submittedSongSpec: StringifiedSongSpec = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, submittedSongSpec }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_DISPLAYED_SONG_SPEC: {
                const displayedSongSpec: StringifiedSongSpec = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, displayedSongSpec }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_INVALID_SONG_SPEC_INPUTS: {
                const invalidSongSpecInputs: StringifiedSongSpecInputStates = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, invalidSongSpecInputs }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS: {
                const unsubmittedSongSpecInputs: StringifiedSongSpecInputStates = action.data

                const ui: UI = state.get('ui')
                const updatedUI: UI = { ...ui, unsubmittedSongSpecInputs }

                return state
                    .set('ui', updatedUI)
            }
            case ActionType.SET_THREADS: {
                const threads: Threads = action.data

                return state
                    .set('threads', threads)
            }
            case ActionType.SET_SONG_ID: {
                const songId: SongID = action.data

                return state
                    .set('songId', songId)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
