import { compilePattern } from '@musical-patterns/compiler'
import { Pattern } from '@musical-patterns/pattern'

// tslint:disable-next-line:no-any
declare const require: any

if (!!process.env.PATTERN) {
    const patternName: string = process.env.PATTERN
    // tslint:disable-next-line:no-var-requires
    const pattern: Pattern = require(`../../src/${patternName}`).pattern

    if (pattern) {
        it(`${patternName} stays locked down`, async (done: DoneFn) => {
            expect(JSON.stringify(await compilePattern(pattern), undefined, 2))
            // tslint:disable-next-line:no-require-imports no-unsafe-any
                .toEqual(JSON.stringify(require(`../../src/${patternName.replace(/_/g, '')}/package/snapshot`), undefined, 2))

            done()
        })
    }
    else {
        it('warns you that you tried to focus snapshot test on a pattern that was not found')
    }
}
