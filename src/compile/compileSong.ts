import song from '../song'
import buildEntity from './buildEntity'
import entities from './entities'
import { EntityConfig } from './types'

const compileSong: () => void = (): void => {
    song.entityConfigs.forEach((entityConfig: EntityConfig): void => {
        entities.push(buildEntity(entityConfig))
    })
}

export default compileSong
