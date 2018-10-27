import { Cents, Frequency, Scalar } from '../nominal'
import { SampleName } from '../types'

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

type SampleDatas = { [x in SampleName]: SampleData }

export {
    ModulePath,
    NoteToPlay,
    StartNote,
    StopNote,
    SampleData,
    SampleDatas,
}
