import numbers from './numbers'

const subharmonicSeriesPitches = numbers.map(n => 1 / n )

const harmonicSeriesPitches = numbers.map(n => n)

export {
    subharmonicSeriesPitches,
    harmonicSeriesPitches,
}
