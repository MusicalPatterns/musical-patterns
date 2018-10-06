import { buildEntity } from '../../../src/compile/buildEntity'
import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { ActionType, SetEntities } from '../../../src/interface/actions'
import { reducer } from '../../../src/interface/reducer'
import { immutablizeState, State } from '../../../src/interface/state'
import { Song, SongName } from '../../../src/songTypes'
import { Entities, Entity } from '../../../src/types'
import * as to from '../../../src/utilities/to'

describe('reducer', () => {
    it('sets entities', () => {
        const testSong: Song = {
            compile: defaultSongCompile,
            customConfig: {},
            entityConfigs: [],
            formattedName: '',
            name: SongName.HAFUHAFU,
            scales: [],
            standardConfig: {
                baseFrequency: to.Frequency(0),
            },
        }
        const state: State = immutablizeState({
            entities: [],
            song: testSong,
        })
        const testEntity: Entity = buildEntity({}, testSong)

        const newEntities: Entities = [testEntity]
        const action: SetEntities = {
            data: newEntities,
            type: ActionType.SET_ENTITIES,
        }

        const newState: State = reducer(state, action)

        const expectedState: State = immutablizeState({
            entities: newEntities,
            song: testSong,
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())
    })
})
