import { BASE_GAIN, SILENT } from '../constants'
import context from '../context'
import { NoteToPlay, StartNote, StopNote } from '../perform/types'
import { Voice } from '../types'
import applyScale from '../utilities/applyScale'
import * as from from '../utilities/from'

interface CompileOscillatorVoiceParameters {
    timbre: OscillatorType,
}

const compileOscillatorVoice: (compileOscillatorVoiceParameters: CompileOscillatorVoiceParameters) => Voice =
    ({ timbre }: CompileOscillatorVoiceParameters): Voice => {
        const oscillatorNode: OscillatorNode = context.createOscillator()

        const gainNode: GainNode = context.createGain()
        gainNode.connect(context.destination)
        gainNode.gain.value = from.Scalar(SILENT)

        oscillatorNode.connect(gainNode)
        oscillatorNode.type = timbre
        oscillatorNode.start()

        const startNote: StartNote = ({ frequency, gain }: NoteToPlay): void => {
            oscillatorNode.frequency.value = from.Frequency(frequency)
            gainNode.gain.value = from.Scalar(applyScale(gain, BASE_GAIN))
        }

        const stopNote: StopNote = (): void => {
            gainNode.gain.value = from.Scalar(SILENT)
        }

        return {
            startNote,
            stopNote,
        }
    }

export default compileOscillatorVoice
