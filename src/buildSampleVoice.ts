import context from './context'
import samples from './samples'
import { NoteToPlay, StartNote, StopNote, Voice } from './types'

const START_SOURCE_AT_BEGINNING: number = 0
const INITIAL_SAMPLE_ADJUST_PITCH: number = 0
const OCTAVE: number = 2
const CENTS_PER_OCTAVE: number = 1200
const BASE_SAMPLE_GAIN: number = 0.25

const SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE: number = 3600

const ONE_OCTAVE: number = 1200
const TWO_OCTAVES: number = 2400
const ONE_SEMITONE: number = 100
const TWO_SEMITONES: number = 200
const NO_SHIFT: number = 0

const CELLO_SAMPLE_CENTS_ADJUSTMENT: number = NO_SHIFT + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const DOUBLEBASS_SAMPLE_CENTS_ADJUSTMENT: number = TWO_OCTAVES + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const FLUTE_SAMPLE_CENTS_ADJUSTMENT: number = NO_SHIFT + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const PIANO_SAMPLE_CENTS_ADJUSTMENT: number = -TWO_OCTAVES + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const TROMBONE_SAMPLE_CENTS_ADJUSTMENT: number = TWO_SEMITONES + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const TRUMPET_SAMPLE_CENTS_ADJUSTMENT: number = -ONE_SEMITONE + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const TUBA_SAMPLE_CENTS_ADJUSTMENT: number = ONE_OCTAVE + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE
const VIOLIN_SAMPLE_CENTS_ADJUSTMENT: number = NO_SHIFT + SHIFT_AVERAGE_SAMPLE_PITCH_OF_C5_TO_C8_FOR_STEPWISE

const buildSampleVoice: (type: string) => Voice =
    (type: string): Voice => {
        let source: AudioBufferSourceNode

        const startNote: StartNote = ({pitch, gain}: NoteToPlay): void => {
            source = context.createBufferSource()
            source.buffer = samples[type]

            const gainNode: GainNode = context.createGain()
            gainNode.connect(context.destination)
            source.connect(gainNode)
            gainNode.gain.value = gain * BASE_SAMPLE_GAIN

            let sampleAdjustPitch: number = INITIAL_SAMPLE_ADJUST_PITCH
            if (type === 'cello') {
                sampleAdjustPitch = CELLO_SAMPLE_CENTS_ADJUSTMENT
            }
            if (type === 'doublebass') {
                sampleAdjustPitch = DOUBLEBASS_SAMPLE_CENTS_ADJUSTMENT
            }
            if (type === 'flute') {
                sampleAdjustPitch = FLUTE_SAMPLE_CENTS_ADJUSTMENT
            }
            if (type === 'piano') {
                sampleAdjustPitch = PIANO_SAMPLE_CENTS_ADJUSTMENT
            }
            if (type === 'trombone') {
                sampleAdjustPitch = TROMBONE_SAMPLE_CENTS_ADJUSTMENT
            }
            if (type === 'trumpet') {
                sampleAdjustPitch = TRUMPET_SAMPLE_CENTS_ADJUSTMENT
            }
            if (type === 'tuba') {
                sampleAdjustPitch = TUBA_SAMPLE_CENTS_ADJUSTMENT
            }
            if (type === 'violin') {
                sampleAdjustPitch = VIOLIN_SAMPLE_CENTS_ADJUSTMENT
            }

            source.detune.value = sampleAdjustPitch + CENTS_PER_OCTAVE * Math.log(pitch) / Math.log(OCTAVE)

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
