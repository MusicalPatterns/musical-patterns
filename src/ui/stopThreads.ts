import { ImmutableThreads } from '../state'
import { Thread } from '../types'
import { Maybe } from '../utilities'

const stopThreads: (threads: ImmutableThreads) => void =
    (threads: ImmutableThreads): void => {
        // tslint:disable-next-line:no-unsafe-any
        threads.forEach((thread: Maybe<Thread>): void => {
            if (thread) {
                thread.voice.stopNote()
            }
        })
    }

export {
    stopThreads,
}
