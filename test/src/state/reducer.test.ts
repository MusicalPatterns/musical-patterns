// tslint:disable:no-null-keyword

import { List } from 'immutable'
import { ActionType, SetThreads } from '../../../src/state/actions'
import { immutablize } from '../../../src/state/immutablize'
import { rootReducer } from '../../../src/state/rootReducer'
import { ImmutableRootState } from '../../../src/state/rootState'
import { mockThread } from '../../support/mockThread'

describe('reducer', () => {
    it('sets threads', async (done: DoneFn) => {
        const state: ImmutableRootState = immutablize({
            songId: null,
            threads: List([]),
            ui: immutablize({
                displayedSongSpec: {},
                invalidSongSpecInputs: {},
                submittedSongSpec: {},
                unsubmittedSongSpecInputs: {},
            }),
        })

        const action: SetThreads = {
            data: List([ mockThread ]),
            type: ActionType.SET_THREADS,
        }

        // tslint:disable-next-line:no-unsafe-any
        const newState: ImmutableRootState = rootReducer(state, action)

        const expectedState: ImmutableRootState = immutablize({
            songId: null,
            threads: List([ mockThread ]),
            ui: immutablize({
                displayedSongSpec: {},
                invalidSongSpecInputs: {},
                submittedSongSpec: {},
                unsubmittedSongSpecInputs: {},
            }),
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())

        done()
    })
})
