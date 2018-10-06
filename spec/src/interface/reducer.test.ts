import { ActionType, SetEntities } from '../../../src/interface/actions'
import { reducer } from '../../../src/interface/reducer'
import { immutablizeState, State } from '../../../src/interface/state'
import { Entities } from '../../../src/types'
import { mockEntity } from '../../support/mockEntity'
import { mockSong } from '../../support/mockSong'

describe('reducer', () => {
    it('sets entities', () => {
        const state: State = immutablizeState({
            entities: [],
            song: mockSong,
        })

        const newEntities: Entities = [mockEntity]
        const action: SetEntities = {
            data: newEntities,
            type: ActionType.SET_ENTITIES,
        }

        const newState: State = reducer(state, action)

        const expectedState: State = immutablizeState({
            entities: newEntities,
            song: mockSong,
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())
    })
})
