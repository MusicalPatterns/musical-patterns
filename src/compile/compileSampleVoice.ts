import { Cents, Frequency, from, Scalar, to } from '../nominal'
import { buildSampleData, context, NoteToPlay, SampleDatas, samples, StartNote, StopNote } from '../perform'
import { Voice } from '../types'
import { applyScale, pitchToCents } from '../utilities'
import { CompileSampleVoiceParameters } from './types'

const START_SOURCE_AT_BEGINNING: number = 0
// tslint:disable-next-line:no-any no-magic-numbers
const BASE_SAMPLE_GAIN: Scalar = 0.25 as any

// tslint:disable-next-line:no-any no-magic-numbers
const AVERAGE_SAMPLE_PITCH_OF_C5: Frequency = 523.25 as any

let sampleData: SampleDatas

const compileSampleVoice: (compileSampleVoiceParameters: CompileSampleVoiceParameters) => Voice =
    ({ timbre }: CompileSampleVoiceParameters): Voice => {
        let source: AudioBufferSourceNode

        sampleData = sampleData || buildSampleData()

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

export {
    compileSampleVoice,
}
