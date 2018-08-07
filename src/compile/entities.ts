import song from '../song'
import { Entity } from '../types'
import buildEntity from './buildEntity'

const entities: Entity[] = song.entityConfigs.map(buildEntity)

export default entities
