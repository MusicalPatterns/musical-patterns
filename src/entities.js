import {
    backboneNotes,
    fivePerNotes,
    hihatNotes,
    kickNotes,
    mainDescentContinuationNotes,
    mainDescentNotes,
    ninePerNotes,
    sevenPerNotes,
    snareNotes,
    threePerNotes,
    umowchuwowiestCrossedWithStepwiseOneNotes,
    umowchuwowiestCrossedWithStepwiseTwoNotes
} from './notes'
import buildSampleVoice from './buildSampleVoice'
import buildVoice from './buildVoice'
import {harmonicSeriesPitches, subharmonicSeriesPitches, subparticularSeriesPitches} from './pitches'
import sequence from './sequence'

const stepwiseMainDescent = {
    notes: mainDescentNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('trombone'),
    voiceGain: 0.5,
    id: 0,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseMainDescentOscillatorForCheckingTuningAgainst = {
    notes: mainDescentNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 0,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseMainDescentContinuation = {
    notes: mainDescentContinuationNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('tuba'),
    voiceGain: 1,
    id: 1,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst = {
    notes: mainDescentContinuationNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('sine'),
    voiceGain: 1,
    id: 1,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseThreePer = {
    notes: threePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('flute'),
    voiceGain: .25,
    id: 2,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseThreePerOscillatorForCheckingTuningAgainst = {
    notes: threePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 2,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseFivePer = {
    notes: fivePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('violin'),
    voiceGain: .38,
    id: 3,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseFivePerOscillatorForCheckingTuningAgainst = {
    notes: fivePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 3,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseSevenPer = {
    notes: sevenPerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('trumpet'),
    voiceGain: .25,
    id: 4,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseSevenPerOscillatorForCheckingTuningAgainst = {
    notes: sevenPerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 4,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseNinePer = {
    notes: ninePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('cello'),
    voiceGain: .25,
    id: 5,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseNinePerOscillatorForCheckingTuningAgainst = {
    notes: ninePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 5,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseBackbone = {
    notes: backboneNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('piano'),
    voiceGain: 0.05,
    id: 6,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseBackboneOscillatorForCheckingTuningAgainst = {
    notes: backboneNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 6,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseKick = {
    notes: kickNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('kick'),
    voiceGain: 1,
    id: 7,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseSnare = {
    notes: snareNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('snare'),
    voiceGain: 1,
    id: 8,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const stepwiseHihat = {
    notes: hihatNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('hihat'),
    voiceGain: 1,
    id: 9,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}

const umowchuwowiestCrossedWithStepwiseOne = {
    notes: umowchuwowiestCrossedWithStepwiseOneNotes,
    pitches: harmonicSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 10,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const umowchuwowiestCrossedWithStepwiseTwo = {
    notes: umowchuwowiestCrossedWithStepwiseTwoNotes,
    pitches: subparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: 1,
    id: 14,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}

const stepwiseSamples = [
    stepwiseMainDescent,
    stepwiseMainDescentContinuation,
    stepwiseThreePer,
    stepwiseFivePer,
    stepwiseSevenPer,
    // stepwiseBackbone,
]

const stepwiseOscillatorsForCheckingTuningAgainst = [
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    // stepwiseBackboneOscillatorForCheckingTuningAgainst,
]

const stepwisePercussion = [
    stepwiseKick,
    stepwiseSnare,
    stepwiseHihat,
]

const umowchuwowiestCrossedWithStepwise = [
    umowchuwowiestCrossedWithStepwiseOne,
    umowchuwowiestCrossedWithStepwiseTwo,
]

const stepwiseSong = sequence([
    stepwiseSamples,
    // stepwiseOscillatorsForCheckingTuningAgainst,
    // stepwisePercussion,
])

const entities = sequence([
    // stepwiseSong,
    umowchuwowiestCrossedWithStepwise,
])

export default entities
