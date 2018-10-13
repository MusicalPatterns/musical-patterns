import { compileEntity } from '../../src/compile/compileEntity'
import { Entity } from '../../src/types'
import { emptySongSpec } from '../../src/ui/emptySongSpec'

const mockEntity: Entity = compileEntity({}, emptySongSpec)

export {
    mockEntity,
}
