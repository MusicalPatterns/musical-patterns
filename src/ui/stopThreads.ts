import { ImmutableThreads } from '../state/threadsState'
import { Thread } from '../types'
import { Maybe } from '../utilities/types'

const stopThreads: (threads: ImmutableThreads) => void =
    (threads: ImmutableThreads): void => {
        threads.forEach((thread: Maybe<Thread>): void => {
            if (thread) {
                thread.voice.stopNote()
            }
        })
    }

export {
    stopThreads,
}
