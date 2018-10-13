import { Song } from '../songTypes'
import { UI } from '../state/state'
import { Entities } from '../types'
import {
    HandleConfigBlurEvent,
    HandleConfigChangeEvent,
    HandleConfigSubmitEvent,
    HandleSongChangeEvent,
} from '../ui/types'

interface AppProps {
    song?: Song,
}

interface SongSelectorPropsFromState {
    entities: Entities,
}
interface SongSelectorPropsFromDispatch {
    handleSongChangeEvent: HandleSongChangeEvent,
}
interface SongSelectorProps extends SongSelectorPropsFromState, SongSelectorPropsFromDispatch {
}

interface ConfigSelectorPropsFromState {
    entities: Entities,
    song: Song,
    ui: UI,
}

interface ConfigSelectorPropsFromDispatch {
    handleConfigBlurEvent: HandleConfigBlurEvent,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
}
interface ConfigSelectorProps extends ConfigSelectorPropsFromState, ConfigSelectorPropsFromDispatch {
}

interface ConfigOptionProps {
    configKey: string,
    configSelectorProps: ConfigSelectorProps,
    configValue: string,
    invalid: boolean,
    unsubmitted: boolean,
}

export {
    AppProps,
    ConfigSelectorProps,
    ConfigSelectorPropsFromState,
    ConfigSelectorPropsFromDispatch,
    ConfigOptionProps,
    SongSelectorProps,
    SongSelectorPropsFromState,
    SongSelectorPropsFromDispatch,
}
