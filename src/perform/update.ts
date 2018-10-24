import { TimeType } from '../compile/types'
import { BASE_DURATION } from '../constants'
import { Note, Thread } from '../types'
import applyOffset from '../utilities/applyOffset'
import applyScale from '../utilities/applyScale'
import * as from from '../utilities/from'
import { Time } from '../utilities/nominalTypes'
import * as to from '../utilities/to'

const update: (thread: Thread, rawTime: Time, atomicTime: Time) => void =
    (thread: Thread, rawTime: Time, atomicTime: Time): void => {
        const time: Time = thread.timeType === TimeType.RAW ? rawTime : atomicTime

        const note: Note = thread.notes[ from.Index(thread.noteIndex) ]

        if (time > thread.nextEnd) {
            thread.voice.stopNote()
        }

        if (from.Index(thread.noteIndex) === thread.notes.length) {
            thread.noteIndex = to.Index(0)
        }

        if (time > thread.nextStart) {
            thread.voice.startNote({
                frequency: note.frequency,
                gain: note.gain,
            })

            thread.nextEnd = applyOffset(
                thread.nextStart,
                to.Offset(from.Time(applyScale(note.sustain, BASE_DURATION))),
            )
            thread.nextStart = applyOffset(
                thread.nextStart,
                to.Offset(from.Time(applyScale(note.duration, BASE_DURATION))),
            )

            thread.noteIndex = to.Index(from.Index(thread.noteIndex) + 1)
        }
    }

export default update
