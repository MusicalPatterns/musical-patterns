import numbers from '../../src/numbers'

const subparticularSeriesPitches  = numbers.map(n => n / (n + 1))

const superparticularSeriesPitches = numbers.map(n => (n + 1) / n)

const dubparticularSeriesPitches = numbers.map(n => n / (n + 2))

const duperparticularSeriesPitches = numbers.map(n => (n + 2) / n)

export {
    subparticularSeriesPitches,
    superparticularSeriesPitches,
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
}
