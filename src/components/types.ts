import { Core } from '../../songs/beaten-path/src/types'
import { Config } from '../interface/state'
import { SongName } from '../songTypes'
import { Entities } from '../types'

interface AppPropsFromState {
    config: Config,
    entities: Entities,
    songName: SongName,
}

interface AppPropsFromDispatch {
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

interface ConfigSelectorProps {
    config: Config,
    entities: Entities,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    songName: SongName,
}

type ConfigEntry = [string, Core]

type HandleConfigChangeEvent =
    (event: React.SyntheticEvent<HTMLInputElement>, configKey: string, entities: Entities, songName: SongName) => void

type HandleSongChangeEvent =
    (event: React.SyntheticEvent<HTMLSelectElement>, entities: Entities) => void

interface SongSelectorProps {
    entities: Entities,
    handleSongChangeEvent: HandleSongChangeEvent,
}

export {
    HandleConfigChangeEvent,
    HandleSongChangeEvent,
    AppProps,
    AppPropsFromState,
    AppPropsFromDispatch,
    ConfigEntry,
    ConfigSelectorProps,
    SongSelectorProps,
}
