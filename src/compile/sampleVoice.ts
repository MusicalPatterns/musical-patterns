import { from, Scalar, to } from '../nominal'
import { buildSampleData, context, NoteToPlay, SampleDatas, samples, StartNote, StopNote } from '../performance'
import { Voice } from '../types'
import { applyScale, centsToPitch } from '../utilities'
import { BASE_SAMPLE_GAIN, STANDARDIZED_SAMPLE_PITCH_OF_C5 } from './constants'
import { CompileSampleVoiceParameters } from './types'

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

            const pitch: Scalar = to.Scalar(from.Frequency(frequency) / from.Frequency(STANDARDIZED_SAMPLE_PITCH_OF_C5))
            const samplePitchAdjustment: Scalar = centsToPitch(sampleData[ timbre ].centsAdjustment || to.Cents(0))
            source.playbackRate.value = from.Scalar(pitch) * from.Scalar(samplePitchAdjustment)

            source.start()
        }

        const stopNote: StopNote = (): void => {
            if (source) {
                try {
                    source.stop()
                }
                // tslint:disable-next-line:no-empty
                catch (e) {}
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
