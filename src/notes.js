const standardNote = harmonic => {
    return {
        duration: harmonic,
        pitch: harmonic,
        sustain: harmonic - 0.1,
        gain: 1,
    }
}

const threePer = [
    3,1,3,1,3,1,3,5,3,1,3,5,3,5,3,5,7,5,3,5,7,5,7,5,7,9,7,5,7,9,7,9,7,9,11,9,7,9,11,9,11,9,11,13,11,9,11,13,11,13,11,13,15,13,11,13,15,13,15,13,15,17,15,13,15,17,15,17,15,17,19,17,15,17,19,17,19,17,19,21,19,17,
]
const fivePer = [
    11,13,11,13,11,13,15,13,11,9,7,5,3,5,3,1,3,5,7,9,7,5,3,5,7,5,7,5,7,5,7,5,7,5,7,5,7,9,7,5,3,5,7,9,11,9,7,5,7,9,7,9,7,9,7,9,7,9,7,9,7,9,11,9,7,5,7,9,11,13,11,9,7,9,11,9,11,9,11,9,11,9,11,9,11,9,11,13,11,9,7,9,11,13,15,13,11,9,11,13,
]
const sevenPer = [
    7,9,7,9,11,9,7,5,7,9,7,9,11,13,15,13,11,9,7,5,3,5,7,9,11,13,11,9,7,9,11,9,11,9,11,9,11,9,11,9,11,9,11,9,11,9,11,9,11,13,11,9,11,9,11,9,7,9,7,9,7,5,3,1,3,5,7,9,11,13,11,9,7,5,7,5,7,5,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,
]
const ninePer = [
    15,13,11,9,11,9,11,9,7,9,7,9,7,9,7,9,7,5,7,5,7,9,11,13,15,17,15,13,11,9,7,5,3,1,3,5,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,11,13,15,17,19,17,15,13,11,9,7,5,7,5,7,5,7,9,11,13,15,17,15,13,11,9,7,5,3,1
]

const divideFortyeightByTwelve = [
    3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
]
const divideFortyeightBySix = [
    3,5,3,5,3,5,3,5,3,5,3,5,
]
const dividFortyeightByFour = [
    7,5,7,5,7,5,7,5,
]
const divideFortyeightByThree = [
    7,9,7,9,7,9,
]
const divideFortyeightByTwo = [
    11,13,11,13,
]
const divideFortyeightByOne = [
    47,49,
]

const notes = {
    mainDescent: [...Array(29).keys()].map(n => (n + 1) * 2 - 1).map(standardNote),
    mainDescentContinuation: [...Array(12).keys()].map(n => (n + 1) * 2 + 57).map(standardNote),
    threePer: threePer.map(standardNote),
    fivePer: fivePer.map(standardNote),
    sevenPer: sevenPer.map(standardNote),
    ninePer: ninePer.map(standardNote),
    backbone: [3,1].map(standardNote),
}

export default notes
