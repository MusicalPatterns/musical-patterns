import { BASE_DURATION } from '../constants'
import { Entity, Note } from '../types'
import { Scalar } from '../utilities/nominalTypes'
import scale from '../utilities/scale'

const OFFSET_FOR_ZERO_INDEXING: number = 1
// tslint:disable-next-line:no-any no-magic-numbers
const FALL_BACK_PITCH: Scalar = 1 as any

const update: (entity: Entity, time: number) => void =
    (entity: Entity, time: number): void => {
        const note: Note = entity.notes[entity.noteIndex]

        if (time > entity.nextOnset) {
            entity.voice.startNote({
                gain: scale(note.gain, entity.voiceGain),
                pitch: entity.pitches[note.pitchIndex - OFFSET_FOR_ZERO_INDEXING] || FALL_BACK_PITCH,
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
