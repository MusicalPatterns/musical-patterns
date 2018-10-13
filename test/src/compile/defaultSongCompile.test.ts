import * as buildEntity from '../../../src/compile/buildEntity'
import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { EntityConfig } from '../../../src/compile/types'
import { SongConfig } from '../../../src/songTypes'
import { emptySongConfig } from '../../../src/ui/emptySongConfig'

describe('default song compile', () => {
    let buildEntitySpy: jasmine.Spy
    beforeEach(() => {
        buildEntitySpy = spyOn(buildEntity, 'buildEntity')
    })

    it('returns built entities', async (done: DoneFn) => {
        const testEntityConfig: EntityConfig = {}
        const testSong: SongConfig = { ...emptySongConfig, entityConfigs: [ testEntityConfig ] }

        await defaultSongCompile(testSong)

        expect(buildEntitySpy).toHaveBeenCalledWith(testEntityConfig, testSong)
        done()
    })
})
