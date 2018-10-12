import { buildEntity } from '../../src/compile/buildEntity'
import { Entity } from '../../src/types'
import { emptySong } from '../../src/ui/emptySong'

const mockEntity: Entity = buildEntity({}, emptySong)

export {
    mockEntity,
}
