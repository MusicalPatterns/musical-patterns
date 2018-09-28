import compileSong from '../compile/compileSong'
import entities from '../compile/entities'
import { Entity } from '../types'
import { Time } from '../utilities/nominalTypes'
import Clock from './clock.worker'
import update from './update'
import * as to from '../utilities/to'
import * as from from '../utilities/from'

// tslint:disable-next-line:no-unsafe-any
const clock: Worker = new Clock()

compileSong()

let atomicTime: Time = to.Time(0)

clock.onmessage = (event: MessageEvent): void => {
    atomicTime = to.Time(from.Time(atomicTime) + 1)

    const rawTime: Time = event.data as Time

    entities.forEach((entity: Entity): void => {
        update(entity, rawTime, atomicTime)
    })
}
