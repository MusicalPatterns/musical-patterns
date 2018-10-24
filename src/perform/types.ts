import { Frequency, Scalar } from '../utilities/nominalTypes'

interface NoteToPlay {
    frequency: Frequency,
    gain: Scalar,
}

type StartNote = (note: NoteToPlay) => void

type StopNote = () => void

export {
    NoteToPlay,
    StartNote,
    StopNote,
}
