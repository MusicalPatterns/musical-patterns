import { Thread, Threads } from '../types'

const stopThreads: (threads: Threads) => void =
    (threads: Threads): void => {
        threads.forEach((thread: Thread): void => {
            thread.voice.stopNote()
        })
    }

export {
    stopThreads,
}
