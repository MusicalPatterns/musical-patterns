import { compilePattern } from '@musical-patterns/compiler'
import { Pattern, PatternId, patternsFilter } from '@musical-patterns/pattern'
import { patterns } from '../../src/indexForTest'
import { PatternEntry } from '../support'

// tslint:disable-next-line:no-any
declare const require: any

const snapshotTestPattern: (patternName: string, pattern: Pattern) => Promise<void> =
    async (patternName: string, pattern: Pattern): Promise<void> => {
        it(`${patternName} stays locked down`, async (done: DoneFn) => {
            expect(JSON.stringify(await compilePattern(pattern), undefined, 2))
            // tslint:disable-next-line:no-require-imports no-unsafe-any
                .toEqual(JSON.stringify(require(`../../src/${patternName.replace(/_/g, '')}/package/snapshot`), undefined, 2))

            done()
        })
    }

if (process.env.PATTERN_NAME) {
    const patternName: string = process.env.PATTERN_NAME
    const pattern: Pattern = patterns[ patternName as PatternId ]

    if (pattern) {
        snapshotTestPattern(patternName, pattern)
            .then()
            .catch()
    }
    else {
        it('warns you that you tried to focus snapshot test on a pattern that was not found')
    }
}
else {
    const templateEntry: PatternEntry = [ PatternId.TEMPLATE, patterns[ PatternId.TEMPLATE ] ]

    describe('snapshot', () => {
        [ templateEntry ].concat(Object.entries(patternsFilter(patterns)))
            .forEach(([ patternName, pattern ]: PatternEntry): void => {
                snapshotTestPattern(patternName, pattern)
                    .then()
                    .catch()
            })
    })
}
