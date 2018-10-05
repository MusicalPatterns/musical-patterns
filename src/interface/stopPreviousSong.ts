import { Entities, Entity } from '../types'

const stopPreviousSong: (entities: Entities) => void =
    (entities: Entities): void => {
        entities.forEach((entity: Entity): void => {
            entity.voice.stopNote()
        })
    }

export {
    stopPreviousSong,
}
