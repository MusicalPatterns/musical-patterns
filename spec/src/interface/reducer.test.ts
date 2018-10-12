import { ActionType, SetEntities } from '../../../src/interface/actions'
import { emptySong } from '../../../src/interface/emptySong'
import { reducer } from '../../../src/interface/reducer'
import { immutablizeState, State } from '../../../src/interface/state'
import { Entities } from '../../../src/types'
import { mockEntity } from '../../support/mockEntity'

describe('reducer', () => {
    it('sets entities', () => {
        const state: State = immutablizeState({
            actualCurrentConfig: {},
            entities: [],
            interfaceConfig: {},
            invalidInputs: {},
            song: emptySong,
            unsubmittedInputs: {},
        })

        const newEntities: Entities = [ mockEntity ]
        const action: SetEntities = {
            data: newEntities,
            type: ActionType.SET_ENTITIES,
        }

        const newState: State = reducer(state, action)

        const expectedState: State = immutablizeState({
            actualCurrentConfig: {},
            entities: newEntities,
            interfaceConfig: {},
            invalidInputs: {},
            song: emptySong,
            unsubmittedInputs: {},
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())
    })
})
