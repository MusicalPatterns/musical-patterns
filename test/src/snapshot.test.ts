import { compilePattern } from '@musical-patterns/compiler'
import { Pattern, patternsFilter } from '@musical-patterns/pattern'
import { patterns } from '../../src/indexForTest'

// tslint:disable-next-line:no-any
declare const require: any

describe('snapshot', () => {
    Object.entries(patternsFilter(patterns))
        .forEach(([ patternName, pattern ]: [ string, Pattern ]): void => {
            it(`${patternName} stays locked down`, async (done: DoneFn) => {
                expect(JSON.stringify(await compilePattern(pattern), undefined, 2))
                // tslint:disable-next-line:no-require-imports no-unsafe-any
                    .toEqual(JSON.stringify(require(`../../src/${patternName.replace(/_/g, '-')}/package/snapshot`), undefined, 2))

                done()
            })
        })
})
