import compileSong from '../compile/compileSong'
import entities from '../compile/entities'
import { Entity } from '../types'
import * as from from '../utilities/from'
import { Time } from '../utilities/nominalTypes'
import * as to from '../utilities/to'
import Clock from './clock.worker'
import update from './update'

// tslint:disable-next-line:no-unsafe-any
const clock: Worker = new Clock()

compileSong()

let offset: Time = to.Time(0)

clock.onmessage = (event: MessageEvent): void => {
    const updatedTime: Time = event.data as Time

    if (!offset) { offset = updatedTime }
    const realTime: Time = to.Time(from.Time(updatedTime) - from.Time(offset))

    entities.forEach((entity: Entity): void => {
        update(entity, realTime)
    })
}
