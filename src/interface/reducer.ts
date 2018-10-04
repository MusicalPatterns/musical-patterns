import buildEntity from '../compile/buildEntity'
import { EntityConfig } from '../compile/types'
import { songLoop } from '../perform/songLoop'
import update from '../perform/update'
import { songs } from '../song'
import { Song } from '../songTypes'
import { Entity, Times } from '../types'
import { Action, ActionType, UpdateSongConfigData } from './actions'
import { Config, initialState, State } from './state'

const stopPreviousSong: (state: State) => void =
    (state: State): void => {
        state.get('entities').forEach((entity: Entity): void => {
            entity.voice.stopNote()
        })
    }

const defaultSongCompile: (song: Song) => Entity[] =
    (song: Song): Entity[] =>
        song.entityConfigs.map((entityConfig: EntityConfig): Entity =>
            buildEntity(entityConfig, song))

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        // tslint:disable-next-line:no-any
        const {data, type}: { data: any | undefined, type: ActionType } = action

        switch (type) {
            case ActionType.CHOOSE_SONG: {
                stopPreviousSong(state)

                const song: Song = songs[data]

                const entities: Entity[] = song.compile ? song.compile(song.config || {}) : defaultSongCompile(song)

                const stateWithNewEntities: State = state.set('entities', entities)
                songLoop()

                const stateWithNewEntitiesAndConfig: State = stateWithNewEntities.set('config', song.config || {})

                return stateWithNewEntitiesAndConfig.set('songName', song.name)
            }
            case ActionType.UPDATE: {
                const {rawTime, atomicTime} = data as Times
                state.get('entities').forEach((entity: Entity): void => {
                    update(entity, rawTime, atomicTime)
                })

                return state
            }
            case ActionType.UPDATE_SONG_CONFIG: {
                const updateSongConfigData: UpdateSongConfigData = data as UpdateSongConfigData
                const newConfig: Config = {
                    ...state.get('config'),
                    [updateSongConfigData.configKey]: updateSongConfigData.value,
                }
                const stateWithNewConfig: State = state.set('config', newConfig)

                stopPreviousSong(state)

                const song: Song = songs[state.get('songName')]
                const entities: Entity[] = song.compile ? song.compile(newConfig) : defaultSongCompile(song)

                const stateWithNewConfigAndNewEntities: State = stateWithNewConfig.set('entities', entities)
                songLoop()

                return stateWithNewConfigAndNewEntities
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
