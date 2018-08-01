import sequence from '../../src/sequence'

const stepwiseForUmowchuwowiestNote = harmonic => ({
    duration: harmonic === 0 ? 1 : harmonic,
    pitch: harmonic === 0 ? 1 : harmonic,
    sustain: harmonic === 0 ? 0.9 : harmonic - 0.1,
    gain: harmonic === 0 ? 0 : 1,
})

const umowchuwowiestNote = harmonic => ({
    duration: 1,
    pitch: harmonic === 0 ? 1 : harmonic,
    sustain: 0.9,
    gain: harmonic === 0 ? 0 : 1,
})

const inbetweenNote = ([harmonic, duration]) => ({
    duration,
    pitch: harmonic,
    sustain: duration - 0.1,
    gain: 1,
})

const umow = [0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3]

const chuwow = [0, 2, 3, 0, 2, 3, 4, 0, 2, 3, 0, 2, 3, 4, 5]

const iest = [0, 2, 3, 4, 5, 0, 2, 3, 4, 5, 0, 2, 3, 4, 5]

const twentyfourRhythm = [1, 0, 3, 1, 0, 3, 1, 0, 3, 0, 5, 1, 0, 3, 1, 0, 3, 1, 0, 3, 0, 5, 0, 7]

const umowAlt = [1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3]

const chuwowAlt = [1, 0, 3, 1, 0, 3, 0, 1, 0, 3, 1, 0, 3, 0, 5]

const iestAlt = [1, 0, 3, 0, 5, 1, 0, 3, 0, 5, 1, 0, 3, 0, 5]

const twentyfourRhythmAlt = [0, 2, 3, 0, 2, 3, 0, 2, 3, 4, 5, 0, 2, 3, 0, 2, 3, 0, 2, 3, 4, 5, 6, 7]

const umowWithBoom = [1, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3, 0, 2, 3]

const iestWithBoom = [1, 2, 3, 4, 5, 0, 2, 3, 4, 5, 0, 2, 3, 4, 5]

const umowDoubleAlt = [1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3, 1, 0, 3]

const chuwowDoubleAlt = [1, 0, 3, 1, 0, 3, 0, 5, 1, 0, 3, 0, 5, 0, 7]

const iestDoubleAlt = [1, 0, 3, 0, 5, 0, 7, 0, 1, 0, 3, 0, 5, 0, 7]

const twentyfourRhythmDoubleAlt = [0, 2, 3, 0, 2, 3, 4, 0, 2, 3, 0, 2, 3, 4, 5, 0, 2, 3, 0, 2, 3, 4, 5, 0, 2, 3, 4]

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

const umowchuwowiestDoubleAltNotes = sequence([
    chuwowDoubleAlt,
    chuwowDoubleAlt,
    chuwowDoubleAlt,
    chuwowDoubleAlt,
    iestDoubleAlt,
    umowDoubleAlt,
    iestDoubleAlt,
    umowDoubleAlt,
    twentyfourRhythmDoubleAlt,
    twentyfourRhythmDoubleAlt,
    twentyfourRhythmDoubleAlt,
    twentyfourRhythmDoubleAlt,
]).map(umowchuwowiestNote)

const stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes = [
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
].map(stepwiseForUmowchuwowiestNote)

const stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes = [
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [3, 1], [3, 2],
    [4, 1], [4, 2], [4, 1], [5, 2], [5, 1], [5, 2], [6, 1], [6, 2], [6, 1], [6, 2],
    [7, 1], [7, 2], [7, 1], [7, 2], [7, 1], [8, 2], [8, 1], [8, 2], [8, 1], [8, 2],
    [9, 1], [9, 2], [9, 1], [9, 2], [9, 1], [9, 2], [10, 1], [10, 2], [10, 1], [10, 2],
    [10, 1], [10, 2], [10, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2],

    [9, 1], [9, 3], [9, 1], [9, 3], [9, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
].map(inbetweenNote)

const stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes = [
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 3, 3, 3,
    4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
    7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
].map(umowchuwowiestNote)

const backboneFifteenNotes = [
    1,2,1,2,1,2,1,2,1,2
].map(stepwiseForUmowchuwowiestNote)

const backboneTwentyfourNotes = [
    1,3,1,3,1,3,1,3,1,3,1,3,
].map(stepwiseForUmowchuwowiestNote)

const rightNumberOfBackboneFifteenNotes = sequence([
    backboneFifteenNotes,
    backboneFifteenNotes,
    backboneFifteenNotes,
    backboneFifteenNotes,
    backboneFifteenNotes,
    backboneFifteenNotes,
    backboneFifteenNotes,
    backboneFifteenNotes,
])

const rightNumberOfBackboneTwentyfourNotes = sequence([
    backboneTwentyfourNotes,
    backboneTwentyfourNotes,
    backboneTwentyfourNotes,
    backboneTwentyfourNotes,
])

const rightNumberOfBackboneNotes = sequence([
    rightNumberOfBackboneFifteenNotes,
    rightNumberOfBackboneTwentyfourNotes,
])

const umowchuwowiestCrossedWithStepwiseOneNotes = sequence([
    // season 1
    umowwwNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
    // season 2
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    umowchuwowiestAltNotes,
    // season 3
    umowwwRestNotes,
    rightNumberOfBackboneNotes,
    rightNumberOfBackboneNotes,
    // season 4
    umowwwRestNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
])
const umowchuwowiestCrossedWithStepwiseTwoNotes = sequence([
    // season 1
    umowwwRestNotes,
    umowchuwowiestNotes,
    umowchuwowiestNotes,
    // season 2
    umowwwAltNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
    // season 3
    umowwwRestNotes,
    rightNumberOfBackboneNotes,
    rightNumberOfBackboneNotes,
    // season 4
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
])
const umowchuwowiestCrossedWithStepwiseThreeNotes = sequence([
    // season 1
    umowwwRestNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes,
    // season 2
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes,
    // season 3
    backboneTwentyfourNotes,
    rightNumberOfBackboneNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes,
    // season 4
    umowwwAltAndNotNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes,
    umowchuwowiestDoubleAltNotes,
])

export {
    umowchuwowiestCrossedWithStepwiseOneNotes,
    umowchuwowiestCrossedWithStepwiseTwoNotes,
    umowchuwowiestCrossedWithStepwiseThreeNotes,
}
