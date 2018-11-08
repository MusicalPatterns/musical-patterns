// tslint:disable:no-null-keyword no-unsafe-any

import { ActionType, ImmutableRootState, immutablize, PerformanceStateAction, rootReducer, to } from '../../../src/indexForTest'
import { mockThread } from '../../support'

describe('reducer', () => {
    it('sets threads', async (done: DoneFn) => {
        const state: ImmutableRootState = immutablize({
            patternId: null,
            patternSpec: immutablize({
                disabledPatternSpecButtons: {},
                displayedPatternSpec: {},
                invalidPatternSpecInputs: {},
                submittedPatternSpec: {},
                unsubmittedPatternSpecInputs: {},
            }),
            performance: immutablize({
                atomicTime: to.Time(0),
                clock: undefined,
                paused: false,
                rawTime: to.Time(0),
                threads: [],
            }),
        })

        const action: PerformanceStateAction = {
            data: [ mockThread ],
            type: ActionType.SET_THREADS,
        }

        // tslint:disable-next-line:no-unsafe-any
        const newState: ImmutableRootState = rootReducer(state, action)

        const expectedState: ImmutableRootState = immutablize({
            patternId: null,
            patternSpec: immutablize({
                disabledPatternSpecButtons: {},
                displayedPatternSpec: {},
                invalidPatternSpecInputs: {},
                submittedPatternSpec: {},
                unsubmittedPatternSpecInputs: {},
            }),
            performance: immutablize({
                atomicTime: to.Time(0),
                clock: undefined,
                paused: false,
                rawTime: to.Time(0),
                threads: [ mockThread ],
            }),
        })
        expect(newState.toJS())
            .toEqual(expectedState.toJS())

        done()
    })
})
