import { Cents, Frequency, Scalar } from '../nominal'

interface NoteToPlay {
    frequency: Frequency,
    gain: Scalar,
}

type StartNote = (note: NoteToPlay) => void

type StopNote = () => void

type ModulePath = string

interface SampleData {
    centsAdjustment: Cents,
}

export {
    ModulePath,
    NoteToPlay,
    StartNote,
    StopNote,
    SampleData,
}
