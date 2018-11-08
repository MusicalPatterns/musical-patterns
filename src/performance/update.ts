import { TimeType } from '../compile'
import { from, Time, to } from '../nominal'
import { Note, Thread } from '../types'
import { applyOffset, applyScale } from '../utilities'
import { BASE_DURATION } from './constants'

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

export {
    update,
}
