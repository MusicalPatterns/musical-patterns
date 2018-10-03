import buildEntity from '../compile/buildEntity'
import { EntityConfig } from '../compile/types'
import { songLoop } from '../perform/songLoop'
import update from '../perform/update'
import { songs } from '../song'
import { Entity, Song, Times } from '../types'
import { Action, ActionType } from './actions'
import { initialState, State } from './state'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        // tslint:disable-next-line:no-any
        const {data, type}: { data: any | undefined, type: ActionType } = action

        switch (type) {
            case ActionType.CHOOSE_SONG: {
                state.get('entities').forEach((entity: Entity): void => {
                    entity.voice.stopNote()
                })

                const song: Song = songs[data]
                const entities: Entity[] = song.entityConfigs.map((entityConfig: EntityConfig): Entity =>
                    buildEntity(entityConfig, song))

                songLoop()

                return state.set('entities', entities)
            }
            case ActionType.UPDATE: {
                const {rawTime, atomicTime} = data as Times
                state.get('entities').forEach((entity: Entity): void => {
                    update(entity, rawTime, atomicTime)
                })

                return state
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
