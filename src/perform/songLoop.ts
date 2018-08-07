import entities from '../compile/entities'
import { Entity } from '../types'
import Time from './time.worker'
import update from './update'

// tslint:disable-next-line:no-unsafe-any
const time: Worker = new Time()

time.onmessage = (event: MessageEvent): void => {
    const updatedTime: number = event.data as number
    entities.forEach((entity: Entity): void => {
        update(entity, updatedTime)
    })
}
