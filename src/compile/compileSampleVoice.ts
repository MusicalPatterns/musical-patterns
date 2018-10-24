import context from '../context'
import { NoteToPlay, StartNote, StopNote } from '../perform/types'
import sampleData from '../sampleData'
import samples from '../samples'
import { SampleName, Voice } from '../types'
import applyScale from '../utilities/applyScale'
import { pitchToCents } from '../utilities/cents'
import * as from from '../utilities/from'
import { Cents, Frequency, Scalar } from '../utilities/nominalTypes'
import * as to from '../utilities/to'

const START_SOURCE_AT_BEGINNING: number = 0
// tslint:disable-next-line:no-any no-magic-numbers
const BASE_SAMPLE_GAIN: Scalar = 0.25 as any

// tslint:disable-next-line:no-any no-magic-numbers
const AVERAGE_SAMPLE_PITCH_OF_C5: Frequency = 523.25 as any

interface CompileSampleVoiceParameters {
    timbre: SampleName,
}

const compileSampleVoice: (compileSampleVoiceParameters: CompileSampleVoiceParameters) => Voice =
    ({ timbre }: CompileSampleVoiceParameters): Voice => {
        let source: AudioBufferSourceNode

        const startNote: StartNote = ({ frequency, gain }: NoteToPlay): void => {
            source = context.createBufferSource()
            source.buffer = samples[ timbre ]

            const gainNode: GainNode = context.createGain()
            gainNode.connect(context.destination)
            source.connect(gainNode)
            gainNode.gain.value = from.Scalar(applyScale(gain, BASE_SAMPLE_GAIN))

            const pitch: Scalar = to.Scalar(from.Frequency(frequency) / from.Frequency(AVERAGE_SAMPLE_PITCH_OF_C5))
            const pitchShift: Cents = pitchToCents(pitch)
            const sampleShift: Cents = sampleData[ timbre ].centsAdjustment

            source.detune.value = from.Cents(sampleShift) + from.Cents(pitchShift)

            source.start(START_SOURCE_AT_BEGINNING)
        }

        const stopNote: StopNote = (): void => {
            if (source) {
                source.stop()
            }
        }

        return {
            startNote,
            stopNote,
        }
    }

export default compileSampleVoice
