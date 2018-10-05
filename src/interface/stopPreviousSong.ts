import { Entity } from '../types'

const stopPreviousSong: (entities: Entity[]) => void =
    (entities: Entity[]): void => {
        entities.forEach((entity: Entity): void => {
            entity.voice.stopNote()
        })
    }

export {
    stopPreviousSong,
}
