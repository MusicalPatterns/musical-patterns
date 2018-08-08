import { BASE_DURATION } from '../constants'
import { Entity, Note } from '../types'
import * as from from '../utilities/from'
import { Scalar, Time } from '../utilities/nominalTypes'
import offset from '../utilities/offset'
import scale from '../utilities/scale'
import * as to from '../utilities/to'

const OFFSET_FOR_ZERO_INDEXING: number = 1
// tslint:disable-next-line:no-any no-magic-numbers
const FALL_BACK_PITCH: Scalar = 1 as any

const update: (entity: Entity, time: Time) => void =
    (entity: Entity, time: Time): void => {
        const note: Note = entity.notes[entity.noteIndex]

        if (time > entity.nextOnset) {
            entity.voice.startNote({
                gain: scale(note.gain, entity.voiceGain),
                pitch: entity.pitches[note.pitchIndex - OFFSET_FOR_ZERO_INDEXING] || FALL_BACK_PITCH,
            })

            entity.nextOnset = offset(entity.nextOnset, to.Offset(from.Time(scale(note.duration, BASE_DURATION))))
            entity.nextOffset = offset(entity.nextOffset, to.Offset(from.Time(scale(note.sustain, BASE_DURATION))))

        } else if (time > entity.nextOffset) {
            entity.voice.stopNote()

            const rawUndo: number = from.Time(note.duration) - from.Time(note.sustain)
            entity.nextOffset = offset(entity.nextOffset, to.Offset(scale(rawUndo, BASE_DURATION)))

            entity.noteIndex++
        }

        if (entity.noteIndex === entity.notes.length) {
            entity.noteIndex = 0
        }
    }

export default update
