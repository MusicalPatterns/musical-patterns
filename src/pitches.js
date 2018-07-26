const numbers = [...Array(81).keys()].map(n => n + 1)

const subharmonicSeriesPitches = numbers.map(n => 1 / n )

const harmonicSeriesPitches = numbers.map(n => n)

const subparticularSeriesPitches  = numbers.map(n => n / (n + 1))

const superparticularSeriesPitches = numbers.map(n => (n + 1) / n)

const dubparticularSeriesPitches = numbers.map(n => n / (n + 2))

const duperparticularSeriesPitches = numbers.map(n => (n + 2) / n)

export {
    subharmonicSeriesPitches,
    harmonicSeriesPitches,
    subparticularSeriesPitches,
    superparticularSeriesPitches,
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
}
