import { Song } from '../songTypes'
import { Entities } from '../types'

type HandleConfigChangeEvent = (
    event: React.SyntheticEvent<HTMLInputElement>,
    configKey: string,
    song: Song,
) => void

type HandleConfigSubmitEvent = (
    event: React.KeyboardEvent,
    entities: Entities,
    song: Song,
) => void

type HandleSongChangeEvent =
    (event: React.SyntheticEvent<HTMLSelectElement>, entities: Entities) => void

export {
    HandleConfigChangeEvent,
    HandleSongChangeEvent,
    HandleConfigSubmitEvent,
}
