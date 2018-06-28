const BASE_PITCH = 2000

const pitches = [...Array(50).keys()].map(n => BASE_PITCH / (n + 1) )

console.log(pitches)

export default pitches
