import { buildEntity } from '../../src/compile/buildEntity'
import { Entity } from '../../src/types'
import { mockSong } from './mockSong'

const mockEntity: Entity = buildEntity({}, mockSong)

export {
    mockEntity,
}
