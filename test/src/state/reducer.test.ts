import { Song } from '../../../src/songTypes'
import { ActionType, SetSong } from '../../../src/state/actions'
import { reducer } from '../../../src/state/reducer'
import { immutablizeState, State } from '../../../src/state/state'
import { mockSongSpec } from '../../support/mockSongConfig'

describe('reducer', () => {
    it('sets song', async (done: DoneFn) => {
        const state: State = immutablizeState({
            song: undefined,
            ui: {
                displayedConfig: {},
                invalidConfigInputs: {},
                submittedConfig: {},
                unsubmittedConfigInputs: {},
            },
        })

        const newSong: Song = await mockSongSpec.compile(mockSongSpec)
        const action: SetSong = {
            data: newSong,
            type: ActionType.SET_SONG,
        }

        const newState: State = reducer(state, action)

        const expectedState: State = immutablizeState({
            song: newSong,
            ui: {
                displayedConfig: {},
                invalidConfigInputs: {},
                submittedConfig: {},
                unsubmittedConfigInputs: {},
            },
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())

        done()
    })
})
