import { compilePattern } from '@musical-patterns/compiler'
import { Pattern } from '@musical-patterns/pattern'
// @ts-ignore
import { collectPatternNames } from '../../bin'

const snapshotTestPattern: (patternName: string, pattern: Pattern) => Promise<void> =
    async (patternName: string, pattern: Pattern): Promise<void> => {
        it(`${patternName} stays locked down`, async (done: DoneFn) => {
            expect(JSON.stringify(await compilePattern(pattern), undefined, 2))
            // tslint:disable-next-line:no-require-imports no-unsafe-any
                .toEqual(JSON.stringify(require(`../../src/${patternName.replace(/_/g, '')}/package/snapshot`), undefined, 2))

            done()
        })
    }

const getPattern: (patternName: string) => Pattern =
    (patternName: string): Pattern =>
        // tslint:disable-next-line:no-var-requires no-unsafe-any
        require(`../../src/${patternName}`).pattern

if (!!process.env.PATTERN && process.env.PATTERN !== 'ALL') {
    const patternName: string = process.env.PATTERN
    const pattern: Pattern = getPattern(patternName)

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
    describe('snapshot', () => {
        const patternNames: string[] = collectPatternNames()
        patternNames.forEach((patternName: string): void => {
            const pattern: Pattern = getPattern(patternName)

            snapshotTestPattern(patternName, pattern)
                .then()
                .catch()
        })
    })
}
