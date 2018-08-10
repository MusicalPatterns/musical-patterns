import { BASE_DURATION } from '../constants'
import song from '../song'
import { Entity, Note, Scale } from '../types'
import * as from from '../utilities/from'
import { Offset, Scalar, Time } from '../utilities/nominalTypes'
import offset from '../utilities/offset'
import scale from '../utilities/scale'
import * as to from '../utilities/to'

// tslint:disable-next-line:no-any no-magic-numbers
const OFFSET_FOR_ZERO_INDEXING: Offset = -1 as any
// tslint:disable-next-line:no-any no-magic-numbers
const FALL_BACK_PITCH: Scalar = 1 as any

const update: (entity: Entity, time: Time) => void =
    (entity: Entity, time: Time): void => {
        const note: Note = entity.notes[from.Index(entity.noteIndex)]

        if (time > entity.nextStart) {
            const pitchScale: Scale = song.scales[from.Index(note.scaleIndex)]

            entity.voice.startNote({
                gain: scale(note.gain, entity.voiceGain),
                pitch: pitchScale[offset(from.Index(note.pitchIndex), OFFSET_FOR_ZERO_INDEXING)] || FALL_BACK_PITCH,
            })

            entity.nextStart = offset(entity.nextStart, to.Offset(from.Time(scale(note.duration, BASE_DURATION))))
            entity.nextEnd = offset(entity.nextEnd, to.Offset(from.Time(scale(note.sustain, BASE_DURATION))))

        } else if (time > entity.nextEnd) {
            entity.voice.stopNote()

            const rawUndo: number = from.Time(note.duration) - from.Time(note.sustain)
            entity.nextEnd = offset(entity.nextEnd, to.Offset(scale(rawUndo, BASE_DURATION)))

            entity.noteIndex = to.Index(from.Index(entity.noteIndex) + 1)
        }

        if (from.Index(entity.noteIndex) === entity.notes.length) {
            entity.noteIndex = to.Index(0)
        }
    }

export default update
