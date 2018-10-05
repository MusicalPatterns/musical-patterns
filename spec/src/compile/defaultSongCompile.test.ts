import * as buildEntity from '../../../src/compile/buildEntity'
import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { EntityConfig } from '../../../src/compile/types'
import { Song, SongName } from '../../../src/songTypes'
import * as to from '../../../src/utilities/to'

describe('default song compile', () => {
    let buildEntitySpy: jasmine.Spy
    beforeEach(() => {
        buildEntitySpy = spyOn(buildEntity, 'buildEntity')
    })

    it('returns built entities', async (done: DoneFn) => {
        const testEntityConfig: EntityConfig = {
        }
        const testSong: Song = {
            compile: defaultSongCompile,
            customConfig: {},
            entityConfigs: [
                testEntityConfig,
            ],
            formattedName: '',
            name: SongName.XELT_DLEUDEF_AET_NAELNAEMEUGZ,
            scales: [],
            standardConfig: {
                baseFrequency: to.Frequency(0),
            },
        }

        await defaultSongCompile(testSong)

        expect(buildEntitySpy).toHaveBeenCalledWith(testEntityConfig, testSong)
        done()
    })
})
