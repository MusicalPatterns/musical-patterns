import { from, Time, to } from '../nominal'
import { Thread, Threads } from '../types'
import Clock from './clock.worker'
import { update } from './update'

let clock: Worker

const songLoop: (threads: Threads) => void =
    (threads: Threads): void => {
        let atomicTime: Time = to.Time(0)

        if (clock) {
            clock.terminate()
        }

        // tslint:disable-next-line:no-unsafe-any
        clock = new Clock()

        clock.onmessage = (event: MessageEvent): void => {
            atomicTime = to.Time(from.Time(atomicTime) + 1)
            const rawTime: Time = event.data as Time
            threads.forEach((thread: Thread): void => {
                update(thread, rawTime, atomicTime)
            })
        }
    }

export {
    songLoop,
}
