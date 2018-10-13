import { buildEntity } from '../../src/compile/buildEntity'
import { Entity } from '../../src/types'
import { emptySongConfig } from '../../src/ui/emptySongConfig'

const mockEntity: Entity = buildEntity({}, emptySongConfig)

export {
    mockEntity,
}
