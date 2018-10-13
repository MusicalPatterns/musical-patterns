import { Song } from '../songTypes'
import { Entity } from '../types'

const stopPreviousSong: (song: Song) => void =
    (song: Song): void => {
        song.entities.forEach((entity: Entity): void => {
            entity.voice.stopNote()
        })
    }

export {
    stopPreviousSong,
}
