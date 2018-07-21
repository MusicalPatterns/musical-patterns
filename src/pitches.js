const numbers = [...Array(81).keys()]

const subharmonicSeriesPitches = numbers.map(n => 1 / (n + 1) )

const harmonicSeriesPitches = numbers.map(n => n + 1)

const subparticularSeriesPitches  = numbers.map(n => (n + 1) / (n + 2))

const superparticularSeriesPitches = numbers.map(n => (n + 2) / (n + 1))

export {
    subharmonicSeriesPitches,
    harmonicSeriesPitches,
    subparticularSeriesPitches,
    superparticularSeriesPitches,
}
