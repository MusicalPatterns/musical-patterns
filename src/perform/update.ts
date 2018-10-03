import { TimeType } from '../compile/types'
import { BASE_DURATION } from '../constants'
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

const update: (entity: Entity, rawTime: Time, atomicTime: Time) => void =
    (entity: Entity, rawTime: Time, atomicTime: Time): void => {
        const time: Time = entity.timeType === TimeType.RAW ? rawTime : atomicTime

        const note: Note = entity.notes[from.Index(entity.noteIndex)]

        if (time > entity.nextEnd) {
            entity.voice.stopNote()
        }

        if (from.Index(entity.noteIndex) === entity.notes.length) {
            entity.noteIndex = to.Index(0)
        }

        if (time > entity.nextStart) {
            const pitchScale: Scale = entity.scales[from.Index(note.scaleIndex)]

            const basePitch: Scalar = pitchScale[offset(from.Index(note.pitchIndex), OFFSET_FOR_ZERO_INDEXING)]
            entity.voice.startNote({
                gain: scale(note.gain, entity.voiceGain),
                pitch: scale(basePitch || FALL_BACK_PITCH, note.pitchScalar),
            })

            entity.nextEnd = offset(entity.nextStart, to.Offset(from.Time(scale(note.sustain, BASE_DURATION))))
            entity.nextStart = offset(entity.nextStart, to.Offset(from.Time(scale(note.duration, BASE_DURATION))))

            entity.noteIndex = to.Index(from.Index(entity.noteIndex) + 1)
        }
    }

export default update
