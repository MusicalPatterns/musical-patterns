import { ActionType, SetEntities } from '../../../src/state/actions'
import { reducer } from '../../../src/state/reducer'
import { immutablizeState, State } from '../../../src/state/state'
import { Entities } from '../../../src/types'
import { emptySong } from '../../../src/ui/emptySong'
import { mockEntity } from '../../support/mockEntity'

describe('reducer', () => {
    it('sets entities', () => {
        const state: State = immutablizeState({
            entities: [],
            song: emptySong,
            ui: {
                displayedConfig: {},
                invalidConfigInputs: {},
                submittedConfig: {},
                unsubmittedConfigInputs: {},
            },
        })

        const newEntities: Entities = [ mockEntity ]
        const action: SetEntities = {
            data: newEntities,
            type: ActionType.SET_ENTITIES,
        }

        const newState: State = reducer(state, action)

        const expectedState: State = immutablizeState({
            entities: newEntities,
            song: emptySong,
            ui: {
                displayedConfig: {},
                invalidConfigInputs: {},
                submittedConfig: {},
                unsubmittedConfigInputs: {},
            },
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())
    })
})
