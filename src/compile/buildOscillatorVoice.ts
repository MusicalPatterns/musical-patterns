import { BASE_GAIN, SILENT } from '../constants'
import context from '../context'
import { NoteToPlay, Song, StartNote, StopNote, Voice } from '../types'
import * as from from '../utilities/from'
import scale from '../utilities/scale'

const buildOscillatorVoice: (type: OscillatorType, song: Song) => Voice =
    (type: OscillatorType, song: Song): Voice => {
        const oscillatorNode: OscillatorNode = context.createOscillator()

        const gainNode: GainNode = context.createGain()
        gainNode.connect(context.destination)
        gainNode.gain.value = from.Scalar(SILENT)

        oscillatorNode.connect(gainNode)
        oscillatorNode.type = type
        oscillatorNode.start()

        const startNote: StartNote = ({pitch, gain}: NoteToPlay): void => {
            oscillatorNode.frequency.value = scale(from.Frequency(song.baseFrequency), pitch)
            gainNode.gain.value = from.Scalar(scale(gain, BASE_GAIN))
        }

        const stopNote: StopNote = (): void => {
            gainNode.gain.value = from.Scalar(SILENT)
        }

        return {
            startNote,
            stopNote,
        }
    }

export default buildOscillatorVoice
