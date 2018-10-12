import { Entities } from '../../../src/types'
import { ActionType, SetEntities } from '../../../src/ui/actions'
import { emptySong } from '../../../src/ui/emptySong'
import { reducer } from '../../../src/ui/reducer'
import { immutablizeState, State } from '../../../src/ui/state'
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
