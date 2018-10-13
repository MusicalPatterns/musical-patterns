import { Song } from '../songTypes'
import { Entity } from '../types'
import * as from from '../utilities/from'
import { Time } from '../utilities/nominalTypes'
import * as to from '../utilities/to'
import Clock from './clock.worker'
import update from './update'

// tslint:disable-next-line:no-unsafe-any
let clock: Worker = new Clock()

const songLoop: (song: Song) => void =
    (song: Song): void => {
        let atomicTime: Time = to.Time(0)

        clock.terminate()

        // tslint:disable-next-line:no-unsafe-any
        clock = new Clock()

        clock.onmessage = (event: MessageEvent): void => {
            atomicTime = to.Time(from.Time(atomicTime) + 1)
            const rawTime: Time = event.data as Time
            song.entities.forEach((entity: Entity): void => {
                update(entity, rawTime, atomicTime)
            })
        }
    }

export {
    songLoop,
}
