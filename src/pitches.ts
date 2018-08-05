import numbers from './numbers'

const subharmonicSeriesPitches: number[] = numbers.map((n: number): number => 1 / n)

const harmonicSeriesPitches: number[] = numbers.map((n: number): number => n)

export {
    subharmonicSeriesPitches,
    harmonicSeriesPitches,
}
