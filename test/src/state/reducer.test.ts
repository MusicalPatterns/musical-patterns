import { ActionType, SetThreads } from '../../../src/state/actions'
import { reducer } from '../../../src/state/reducer'
import { immutablizeState, State } from '../../../src/state/state'
import { mockThread } from '../../support/mockThread'

describe('reducer', () => {
    it('sets threads', async (done: DoneFn) => {
        const state: State = immutablizeState({
            songId: undefined,
            threads: [],
            ui: {
                displayedSongSpec: {},
                invalidSongSpecInputs: {},
                submittedSongSpec: {},
                unsubmittedSongSpecInputs: {},
            },
        })

        const action: SetThreads = {
            data: [ mockThread ],
            type: ActionType.SET_THREADS,
        }

        const newState: State = reducer(state, action)

        const expectedState: State = immutablizeState({
            songId: undefined,
            threads: [ mockThread ],
            ui: {
                displayedSongSpec: {},
                invalidSongSpecInputs: {},
                submittedSongSpec: {},
                unsubmittedSongSpecInputs: {},
            },
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())

        done()
    })
})
