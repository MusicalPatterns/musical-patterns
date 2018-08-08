import context from '../context'
import sampleData from '../sampleData'
import samples from '../samples'
import song from '../song'
import { NoteToPlay, StartNote, StopNote, Timbre, Voice } from '../types'
import { centsToShiftFromOneFrequencyToAnother, pitchToCents } from '../utilities/cents'
import * as from from '../utilities/from'
import { Cents, Frequency, Scalar } from '../utilities/nominalTypes'
import scale from '../utilities/scale'

const START_SOURCE_AT_BEGINNING: number = 0
// tslint:disable-next-line:no-any no-magic-numbers
const BASE_SAMPLE_GAIN: Scalar = 0.25 as any

// tslint:disable-next-line:no-any no-magic-numbers
const AVERAGE_SAMPLE_PITCH_OF_C5: Frequency = 523.25 as any

const basePitchShift: Cents = centsToShiftFromOneFrequencyToAnother(
    AVERAGE_SAMPLE_PITCH_OF_C5,
    song.baseFrequency,
)

const buildSampleVoice: (type: Timbre) => Voice =
    (type: Timbre): Voice => {
        let source: AudioBufferSourceNode

        const startNote: StartNote = ({pitch, gain}: NoteToPlay): void => {
            source = context.createBufferSource()
            source.buffer = samples[type]

            const gainNode: GainNode = context.createGain()
            gainNode.connect(context.destination)
            source.connect(gainNode)
            gainNode.gain.value = from.Scalar(scale(gain, BASE_SAMPLE_GAIN))

            const pitchShift: Cents = pitchToCents(pitch)
            const sampleShift: Cents = sampleData[type].centsAdjustment

            source.detune.value = from.Cents(sampleShift) + from.Cents(basePitchShift) + from.Cents(pitchShift)

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
