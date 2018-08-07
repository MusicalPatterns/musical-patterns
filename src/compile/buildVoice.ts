import { BASE_GAIN } from '../constants'
import context from '../context'
import song from '../song'
import { NoteToPlay, StartNote, StopNote, Voice } from '../types'

const buildVoice: (type: OscillatorType) => Voice =
    (type: OscillatorType): Voice => {
        const oscillatorNode: OscillatorNode = context.createOscillator()

        const gainNode: GainNode = context.createGain()
        gainNode.connect(context.destination)
        gainNode.gain.value = 0

        oscillatorNode.connect(gainNode)
        oscillatorNode.type = type
        oscillatorNode.start()

        const startNote: StartNote = ({pitch, gain}: NoteToPlay): void => {
            oscillatorNode.frequency.value = pitch * song.basePitch
            gainNode.gain.value = gain * BASE_GAIN
        }

        const stopNote: StopNote = (): void => {
            gainNode.gain.value = 0
        }

        return {
            startNote,
            stopNote,
        }
    }

export default buildVoice
