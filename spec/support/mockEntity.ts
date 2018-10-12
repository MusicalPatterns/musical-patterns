import { buildEntity } from '../../src/compile/buildEntity'
import { emptySong } from '../../src/interface/emptySong'
import { Entity } from '../../src/types'

const mockEntity: Entity = buildEntity({}, emptySong)

export {
    mockEntity,
}
