import calculateDuration from '../../src/utilities/calculateDuration'

describe('calculateDuration', () => {
    it('totals the durations of the notes', () => {
        const notes = [
            {
                duration: 3,
                gain: 1,
                pitch: 1,
                sustain: 1,
            },
            {
                duration: 4,
                gain: 1,
                pitch: 1,
                sustain: 1,
            },
            {
                duration: 3,
                gain: 1,
                pitch: 1,
                sustain: 1,
            }
        ]

        expect(calculateDuration(notes)).toBe(10)
    })
})
