import { ActionType, SetSong } from '../../../src/state/actions'
import { reducer } from '../../../src/state/reducer'
import { immutablizeState, State } from '../../../src/state/state'
import { Song } from '../../../src/songTypes'
import { mockSongConfig } from '../../support/mockSongConfig'

describe('reducer', () => {
    it('sets song', async (done) => {
        const state: State = immutablizeState({
            song: undefined,
            ui: {
                displayedConfig: {},
                invalidConfigInputs: {},
                submittedConfig: {},
                unsubmittedConfigInputs: {},
            },
        })

        const newSong: Song = await mockSongConfig.compile(mockSongConfig)
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
