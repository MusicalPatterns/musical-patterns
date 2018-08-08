import { CENTS_PER_OCTAVE } from '../constants'
import context from '../context'
import sampleData from '../sampleData'
import samples from '../samples'
import song from '../song'
import { Cents, Frequency, NoteToPlay, StartNote, StopNote, Timbre, Voice } from '../types'
import * as from from '../utilities/from'
import shiftCents from '../utilities/shiftCents'
import * as to from '../utilities/to'

const START_SOURCE_AT_BEGINNING: number = 0
const OCTAVE: number = 2
const BASE_SAMPLE_GAIN: number = 0.25

// tslint:disable-next-line:no-any no-magic-numbers
const AVERAGE_SAMPLE_PITCH_OF_C5: Frequency = 523.25 as any

const basePitchShift: Cents = shiftCents(AVERAGE_SAMPLE_PITCH_OF_C5, song.basePitch)

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

            const pitchShift: Cents = to.Cents(from.Cents(CENTS_PER_OCTAVE) * Math.log(pitch) / Math.log(OCTAVE))
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
