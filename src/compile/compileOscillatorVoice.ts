import { BASE_GAIN, SILENT_GAIN } from '../constants'
import { from } from '../nominal'
import { context, NoteToPlay, StartNote, StopNote } from '../perform'
import { Voice } from '../types'
import { applyScale } from '../utilities'
import { CompileOscillatorVoiceParameters } from './types'

// tslint:disable-next-line:no-type-definitions-outside-types-modules
const compileOscillatorVoice: (compileOscillatorVoiceParameters: CompileOscillatorVoiceParameters) => Voice =
    ({ timbre }: CompileOscillatorVoiceParameters): Voice => {
        const oscillatorNode: OscillatorNode = context.createOscillator()

        const gainNode: GainNode = context.createGain()
        gainNode.connect(context.destination)
        gainNode.gain.value = from.Scalar(SILENT_GAIN)

        oscillatorNode.connect(gainNode)
        oscillatorNode.type = timbre
        oscillatorNode.start()

        const startNote: StartNote = ({ frequency, gain }: NoteToPlay): void => {
            oscillatorNode.frequency.value = from.Frequency(frequency)
            gainNode.gain.value = from.Scalar(applyScale(gain, BASE_GAIN))
        }

        const stopNote: StopNote = (): void => {
            gainNode.gain.value = from.Scalar(SILENT_GAIN)
        }

        return {
            startNote,
            stopNote,
        }
    }

export {
    compileOscillatorVoice,
}
