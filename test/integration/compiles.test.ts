import { elementInnerText } from '@musical-patterns/utilities'
import { page } from '../setup'

describe('it compiles', () => {
    it('since i have more than once deployed a blank screen of death due to the many @musical-patterns deps not matching / being up-to-date, confirm that the code compiles', async (done: DoneFn) => {
        expect(await elementInnerText(page, '#logo h1'))
            .toBe('Musical Patterns')

        done()
    })
})
