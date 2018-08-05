import entities from './entities'
import { Entity } from './types'
import update from './update'
import Time from './workers/time.worker'

// tslint:disable-next-line:no-unsafe-any
const time: Worker = new Time()

time.onmessage = (event: MessageEvent): void => {
    const updatedTime: number = event.data as number
    entities.forEach((entity: Entity): void => {
        update(entity, updatedTime)
    })
}
