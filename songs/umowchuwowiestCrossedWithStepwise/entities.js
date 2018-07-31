import buildVoice from '../../src/buildVoice'
import {
    umowchuwowiestCrossedWithStepwiseOneNotes,
    umowchuwowiestCrossedWithStepwiseTwoNotes,
    umowchuwowiestCrossedWithStepwiseThreeNotes,
} from './notes'
import {dubparticularSeriesPitches, subparticularSeriesPitches} from './pitches'
import {harmonicSeriesPitches} from '../../src/pitches'

const umowchuwowiestCrossedWithStepwiseOne = {
    notes: umowchuwowiestCrossedWithStepwiseOneNotes,
    pitches: subparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: .2,
    id: 10,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const umowchuwowiestCrossedWithStepwiseTwo = {
    notes: umowchuwowiestCrossedWithStepwiseTwoNotes,
    pitches: dubparticularSeriesPitches,
    voice: buildVoice('sawtooth'),
    voiceGain: .2,
    id: 14,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const umowchuwowiestCrossedWithStepwiseThree = {
    notes: umowchuwowiestCrossedWithStepwiseThreeNotes,
    pitches: harmonicSeriesPitches,
    voice: buildVoice('sine'),
    voiceGain: .2,
    id: 15,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}

const umowchuwowiestCrossedWithStepwise = [
    umowchuwowiestCrossedWithStepwiseOne,
    umowchuwowiestCrossedWithStepwiseTwo,
    umowchuwowiestCrossedWithStepwiseThree,
]

export {
    umowchuwowiestCrossedWithStepwise,
}