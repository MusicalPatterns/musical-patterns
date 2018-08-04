type Note = {
    pitch: number,
    gain: number,
    duration: number,
    sustain: number,
}

type NoteToPlay = {
    pitch: number,
    gain: number,
}

type StartNote = (note: NoteToPlay) => void

type StopNote = () => void

type Voice = {
    startNote: StartNote,
    stopNote: StopNote,
}

type Entity = {
    voice: Voice,
    notes: Note[],
    noteIndex: number,
    nextOnset: number,
    pitches: number[],
    voiceGain: number,
    duration: number,
    sustain: number,
    nextOffset: number,
}

export {
    Voice,
    Note,
    NoteToPlay,
    StartNote,
    Entity,
}
