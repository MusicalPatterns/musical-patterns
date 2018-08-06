import buildEntity from './buildEntity'
import song from './song'
import { Entity } from './types'

const entities: Entity[] = song.entityConfigs.map(buildEntity)

export default entities
