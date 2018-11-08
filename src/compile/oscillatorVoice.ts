import { from } from '../nominal'
import { context, NoteToPlay, StartNote, StopNote } from '../performance'
import { Voice } from '../types'
import { applyScale } from '../utilities'
import { BASE_GAIN, SILENT_GAIN } from './constants'
import { CompileOscillatorVoiceParameters } from './types'

// tslint:disable-next-line:no-type-definitions-outside-types-modules
const compileOscillatorVoice: (compileOscillatorVoiceParameters: CompileOscillatorVoiceParameters) => Voice =
    ({ timbre }: CompileOscillatorVoiceParameters): Voice => {
        let oscillatorNode: OscillatorNode
        let gainNode: GainNode

        const startNote: StartNote = ({ frequency, gain }: NoteToPlay): void => {
            oscillatorNode = context.createOscillator()
            gainNode = context.createGain()

            gainNode.connect(context.destination)
            gainNode.gain.value = from.Scalar(SILENT_GAIN)

            oscillatorNode.connect(gainNode)
            oscillatorNode.type = timbre
            oscillatorNode.start()

            oscillatorNode.frequency.value = from.Frequency(frequency)
            gainNode.gain.value = from.Scalar(applyScale(gain, BASE_GAIN))
        }

        const stopNote: StopNote = (): void => {
            if (oscillatorNode && gainNode) {
                oscillatorNode.disconnect()
            }
            if (gainNode) {
                gainNode.disconnect()
            }
        }

        return {
            startNote,
            stopNote,
        }
    }

export {
    compileOscillatorVoice,
}
