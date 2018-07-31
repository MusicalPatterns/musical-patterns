import sequence from './sequence'

const stepwiseNote = harmonic => ({
    duration: harmonic,
    pitch: harmonic,
    sustain: harmonic - 0.1,
    gain: 1,
})

const umowchuwowiestNote = harmonic => ({
    duration: 1,
    pitch: harmonic === 0 ? 1 : harmonic,
    sustain: 0.9,
    gain: harmonic === 0 ? 0 : 1,
})

const unpitchedSampleNote = duration => ({
    duration,
    pitch: 1,
    sustain: duration - 0.1,
    gain: .1,
})

const mainDescent = [...Array(29).keys()].map(n => (n + 1) * 2 - 1)

const mainDescentContinuation = [...Array(12).keys()].map(n => (n + 1) * 2 + 57)

const threePer = [
    3, 1, 3, 1, 3, 1, 3, 5, 3, 1, 3, 5, 3, 5, 3, 5, 7, 5, 3, 5, 7, 5, 7, 5, 7, 9, 7, 5, 7, 9, 7, 9, 7, 9, 11, 9, 7, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 13, 11, 13, 11, 13, 15, 13, 11, 13, 15, 13, 15, 13, 15, 17, 15, 13, 15, 17, 15, 17, 15, 17, 19, 17, 15, 17, 19, 17, 19, 17, 19, 21, 19, 17,
]
const fivePer = [
    11, 13, 11, 13, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 3, 1, 3, 5, 7, 9, 7, 5, 3, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 9, 7, 5, 3, 5, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 7, 9, 11, 13, 15, 13, 11, 9, 11, 13,
]
const sevenPer = [
    7, 9, 7, 9, 11, 9, 7, 5, 7, 9, 7, 9, 11, 13, 15, 13, 11, 9, 7, 5, 3, 5, 7, 9, 11, 13, 11, 9, 7, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9,
]
const ninePer = [
    15, 13, 11, 9, 11, 9, 11, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 11, 13, 15, 17, 19, 17, 15, 13, 11, 9, 7, 5, 7, 5, 7, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1
]
const backbone = [3, 1]

const kick = [8]

const snare = [24]

const hihat = [1]


const divideFortyeightByTwelve = [
    3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
]
const divideFortyeightBySix = [
    3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5,
]
const dividFortyeightByFour = [
    7, 5, 7, 5, 7, 5, 7, 5,
]
const divideFortyeightByThree = [
    7, 9, 7, 9, 7, 9,
]
const divideFortyeightByTwo = [
    11, 13, 11, 13,
]
const divideFortyeightByOne = [
    47, 49,
]

const umow = [0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3]

const chuwow = [0, 2, 3, 0, 2, 3, 4, 0, 2, 3, 0, 2, 3, 4, 5]

const iest = [0, 2, 3, 4, 5, 0, 2, 3, 4, 5, 0, 2, 3, 4, 5]

const twentyfourRhythm = [1, 0, 3, 1, 0, 3, 1, 0, 3, 0, 5, 1, 0, 3, 1, 0, 3, 1, 0, 3, 0, 5, 0, 7]

const umowAlt = [1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3]

const chuwowAlt = [1, 0, 3, 1, 0, 3, 0, 1, 0, 3, 1, 0, 3, 0, 5]

const iestAlt = [1, 0, 3, 0, 5, 1, 0, 3, 0, 5, 1, 0, 3, 0, 5]

const twentyfourRhythmAlt = [0, 2, 3, 0, 2, 3, 0, 2, 3, 4, 5, 0, 2, 3, 0, 2, 3, 0, 2, 3, 4, 5, 6, 7]

const umowwwNotes = [0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3].map(umowchuwowiestNote)

const umowwwAltNotes = [1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3].map(umowchuwowiestNote)

const umowwwAltAndNotNotes = [0, 2, 3, 1, 0, 3, 0, 2, 3, 1, 0, 3, 0, 2, 3, 1, 0, 3, 0, 2, 3, 1, 0, 3].map(umowchuwowiestNote)

const umowwwRestNotes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(umowchuwowiestNote)

const umowchuwowiestNotes = sequence([
    chuwow,
    chuwow,
    chuwow,
    chuwow,
    iest,
    umow,
    iest,
    umow,
    twentyfourRhythm,
    twentyfourRhythm,
    twentyfourRhythm,
    twentyfourRhythm,
]).map(umowchuwowiestNote)

const umowchuwowiestAltNotes = sequence([
    chuwowAlt,
    chuwowAlt,
    chuwowAlt,
    chuwowAlt,
    iestAlt,
    umowAlt,
    iestAlt,
    umowAlt,
    twentyfourRhythmAlt,
    twentyfourRhythmAlt,
    twentyfourRhythmAlt,
    twentyfourRhythmAlt,
]).map(umowchuwowiestNote)

const stepwiseForUmowchuwowiestCrossedWithStepwiseNotes = [
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 3,
    4, 5, 6,
    7, 8,
    9, 10, 11,
    // that lasts two bars
    9, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
].map(stepwiseNote)

const mainDescentNotes = sequence([mainDescent, mainDescentContinuation]).map(stepwiseNote)
const mainDescentContinuationNotes = sequence([mainDescentContinuation, mainDescent]).map(stepwiseNote)
const threePerNotes = sequence([threePer, ninePer]).map(stepwiseNote)
const fivePerNotes = fivePer.map(stepwiseNote)
const sevenPerNotes = sevenPer.map(stepwiseNote)
const ninePerNotes = sequence([ninePer, threePer]).map(stepwiseNote)
const backboneNotes = backbone.map(stepwiseNote)
const kickNotes = kick.map(unpitchedSampleNote)
const snareNotes = snare.map(unpitchedSampleNote)
const hihatNotes = hihat.map(unpitchedSampleNote)

const umowchuwowiestCrossedWithStepwiseOneNotes = sequence([
    umowwwNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseNotes,
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    umowchuwowiestAltNotes,
    umowwwRestNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseNotes,
])
const umowchuwowiestCrossedWithStepwiseTwoNotes = sequence([
    umowwwRestNotes,
    umowchuwowiestNotes,
    umowchuwowiestNotes,
    umowwwAltNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseNotes,
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseNotes,
])
const umowchuwowiestCrossedWithStepwiseThreeNotes = sequence([
    umowwwRestNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseNotes,
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseNotes,
    umowwwAltAndNotNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseNotes,
    umowchuwowiestNotes,
])

export {
    mainDescentNotes,
    mainDescentContinuationNotes,
    threePerNotes,
    fivePerNotes,
    sevenPerNotes,
    ninePerNotes,
    backboneNotes,
    kickNotes,
    snareNotes,
    hihatNotes,
    umowchuwowiestCrossedWithStepwiseOneNotes,
    umowchuwowiestCrossedWithStepwiseTwoNotes,
    umowchuwowiestCrossedWithStepwiseThreeNotes,
}
