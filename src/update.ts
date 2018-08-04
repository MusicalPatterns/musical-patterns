import {BASE_DURATION} from './constants'
import {Entity} from './types'

const OFFSET_FOR_ZERO_INDEXING = 1

const update: (entity: Entity, time: number) => void =
    (entity: Entity, time: number) => {
        const note = entity.notes[entity.noteIndex]

        if (time > entity.nextOnset) {
            entity.voice.startNote({
                pitch: entity.pitches[note.pitch - OFFSET_FOR_ZERO_INDEXING],
                gain: note.gain * entity.voiceGain,
            })

            // console.log('entity', entity.id, 'pitch', note.pitch)

            entity.nextOnset += note.duration * BASE_DURATION
            entity.nextOffset += note.sustain * BASE_DURATION

        } else if (time > entity.nextOffset) {
            entity.voice.stopNote()

            entity.nextOffset -= note.sustain * BASE_DURATION
            entity.nextOffset += note.duration * BASE_DURATION

            entity.noteIndex++
        }

        if (entity.noteIndex === entity.notes.length) {
            // console.log('entity', entity.id, 'looped!')
            entity.noteIndex = 0
        }
    }

export default update
