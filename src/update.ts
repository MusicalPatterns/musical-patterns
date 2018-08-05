import { BASE_DURATION } from './constants'
import { Entity, Note } from './types'

const OFFSET_FOR_ZERO_INDEXING: number = 1

const update: (entity: Entity, time: number) => void =
    (entity: Entity, time: number): void => {
        const note: Note = entity.notes[entity.noteIndex]

        if (time > entity.nextOnset) {
            entity.voice.startNote({
                gain: note.gain * entity.voiceGain,
                pitch: entity.pitches[note.pitch - OFFSET_FOR_ZERO_INDEXING],
            })

            entity.nextOnset += note.duration * BASE_DURATION
            entity.nextOffset += note.sustain * BASE_DURATION

        } else if (time > entity.nextOffset) {
            entity.voice.stopNote()

            entity.nextOffset -= note.sustain * BASE_DURATION
            entity.nextOffset += note.duration * BASE_DURATION

            entity.noteIndex++
        }

        if (entity.noteIndex === entity.notes.length) {
            entity.noteIndex = 0
        }
    }

export default update
