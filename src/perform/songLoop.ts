import compileSong from '../compile/compileSong'
import entities from '../compile/entities'
import { Entity } from '../types'
import { Time } from '../utilities/nominalTypes'
import Clock from './clock.worker'
import update from './update'

// tslint:disable-next-line:no-unsafe-any
const clock: Worker = new Clock()

compileSong()

clock.onmessage = (event: MessageEvent): void => {
    const updatedTime: Time = event.data as Time
    entities.forEach((entity: Entity): void => {
        update(entity, updatedTime)
    })
}
