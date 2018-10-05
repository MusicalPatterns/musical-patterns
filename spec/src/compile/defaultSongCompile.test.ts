import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { Song, SongName } from '../../../src/songTypes'
import * as buildEntity from '../../../src/compile/buildEntity'
import { EntityConfig } from '../../../src/compile/types'
import * as to from '../../../src/utilities/to'

describe('default song compile', () => {
    let buildEntitySpy: jasmine.Spy
    beforeEach(() => {
        buildEntitySpy = spyOn(buildEntity, 'buildEntity')
    })

    it('returns built entities', () => {
        const testEntityConfig: EntityConfig = {
        }
        const testSong: Song = {
            baseFrequency: to.Frequency(0),
            compile: defaultSongCompile,
            config: {},
            entityConfigs: [
                testEntityConfig
            ],
            formattedName: '',
            name: SongName.XELT_DLEUDEF_AET_NAELNAEMEUGZ,
            scales: [],
        }

        defaultSongCompile(testSong)

        expect(buildEntitySpy).toHaveBeenCalledWith(testEntityConfig, testSong)
    })
})
