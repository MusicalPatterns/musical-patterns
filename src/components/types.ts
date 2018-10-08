import {
    HandleConfigChangeEvent,
    HandleConfigSubmitEvent,
    HandleSongChangeEvent,
} from '../interface/types'
import { Song } from '../songTypes'
import { Entities } from '../types'

interface AppPropsFromState {
    entities: Entities,
    song: Song,
}

interface AppPropsFromDispatch {
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

interface ConfigSelectorProps {
    entities: Entities,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    song: Song,
}

interface SongSelectorProps {
    entities: Entities,
    handleSongChangeEvent: HandleSongChangeEvent,
    song: Song,
}

interface ConfigOptionProps {
    configEntry: [string, string],
    configSelectorProps: ConfigSelectorProps,
}

export {
    AppProps,
    AppPropsFromState,
    AppPropsFromDispatch,
    SongSelectorProps,
    ConfigOptionProps,
    ConfigSelectorProps,
}
