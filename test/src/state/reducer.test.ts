// tslint:disable:no-null-keyword no-unsafe-any

import { fromJS } from 'immutable'
import { ActionType, ImmutableRootState, immutablize, rootReducer, ThreadsAction } from '../../../src/indexForTest'
import { mockThread } from '../../support'

describe('reducer', () => {
    it('sets threads', async (done: DoneFn) => {
        const state: ImmutableRootState = immutablize({
            songId: null,
            threads: fromJS([]),
            ui: immutablize({
                displayedSongSpec: {},
                invalidSongSpecInputs: {},
                submittedSongSpec: {},
                unsubmittedSongSpecInputs: {},
            }),
        })

        const action: ThreadsAction = {
            data: fromJS([ mockThread ]),
            type: ActionType.SET_THREADS,
        }

        // tslint:disable-next-line:no-unsafe-any
        const newState: ImmutableRootState = rootReducer(state, action)

        const expectedState: ImmutableRootState = immutablize({
            songId: null,
            threads: fromJS([ mockThread ]),
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
