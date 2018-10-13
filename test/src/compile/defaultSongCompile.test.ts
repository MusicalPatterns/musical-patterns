import * as compileEntity from '../../../src/compile/compileEntity'
import { defaultCompileSong } from '../../../src/compile/defaultCompileSong'
import { EntitySpec } from '../../../src/compile/types'
import { SongSpec } from '../../../src/songTypes'
import { emptySongSpec } from '../../../src/ui/emptySongSpec'

describe('default song compile', () => {
    let compileEntitySpy: jasmine.Spy
    beforeEach(() => {
        compileEntitySpy = spyOn(compileEntity, 'compileEntity')
    })

    it('returns built entities', async (done: DoneFn) => {
        const testEntitySpec: EntitySpec = {}
        const testSong: SongSpec = { ...emptySongSpec, entitySpecs: [ testEntitySpec ] }

        await defaultCompileSong(testSong)

        expect(compileEntitySpy).toHaveBeenCalledWith(testEntitySpec, testSong)
        done()
    })
})
