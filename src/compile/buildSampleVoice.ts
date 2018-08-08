import { CENTS_PER_OCTAVE } from '../constants'
import context from '../context'
import samples from '../samples'
import song from '../song'
import { NoteToPlay, StartNote, StopNote, Timbre, Voice } from '../types'
import shiftCents from '../utilities/shiftCents'

const START_SOURCE_AT_BEGINNING: number = 0
const OCTAVE: number = 2
const BASE_SAMPLE_GAIN: number = 0.25

const AVERAGE_SAMPLE_PITCH_OF_C5: number = 523.25
const SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_BASE_PITCH: number = shiftCents(AVERAGE_SAMPLE_PITCH_OF_C5, song.basePitch)

const ONE_OCTAVE: number = 1200
const TWO_OCTAVES: number = 2400
const ONE_SEMITONE: number = 100
const TWO_SEMITONES: number = 200
const NO_SHIFT: number = 0

interface SampleData {
    centsAdjustment: number,
}

const sampleData: {[x in Timbre]: SampleData} = {
    [Timbre.CELLO]: {
        centsAdjustment: NO_SHIFT,
    },
    [Timbre.DOUBLEBASS]: {
        centsAdjustment: TWO_OCTAVES,
    },
    [Timbre.FLUTE]: {
        centsAdjustment: NO_SHIFT,
    },
    [Timbre.PIANO]: {
        centsAdjustment: -TWO_OCTAVES,
    },
    [Timbre.TROMBONE]: {
        centsAdjustment: TWO_SEMITONES,
    },
    [Timbre.TRUMPET]: {
        centsAdjustment: -ONE_SEMITONE,
    },
    [Timbre.TUBA]: {
        centsAdjustment: ONE_OCTAVE,
    },
    [Timbre.VIOLIN]: {
        centsAdjustment: NO_SHIFT,
    },
    [Timbre.SNARE]: {
        centsAdjustment: NO_SHIFT,
    },
    [Timbre.KICK]: {
        centsAdjustment: NO_SHIFT,
},
    [Timbre.HIHAT]: {
        centsAdjustment: NO_SHIFT,
    },
}

const buildSampleVoice: (type: Timbre) => Voice =
    (type: Timbre): Voice => {
        let source: AudioBufferSourceNode

        const startNote: StartNote = ({pitch, gain}: NoteToPlay): void => {
            source = context.createBufferSource()
            source.buffer = samples[type]

            const gainNode: GainNode = context.createGain()
            gainNode.connect(context.destination)
            source.connect(gainNode)
            gainNode.gain.value = gain * BASE_SAMPLE_GAIN

            const pitchShift: number = CENTS_PER_OCTAVE * Math.log(pitch) / Math.log(OCTAVE)
            const sampleShift: number = sampleData[type].centsAdjustment
            source.detune.value = sampleShift + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_BASE_PITCH + pitchShift

            source.start(START_SOURCE_AT_BEGINNING)
        }

        const stopNote: StopNote = (): void => {
            source.stop()
        }

        return {
            startNote,
            stopNote,
        }
    }

export default buildSampleVoice
