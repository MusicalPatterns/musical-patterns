import { Song } from '../songTypes'
import { UI } from '../state/state'
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
    song?: Song,
}

interface SongSelectorPropsFromDispatch {
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface SongSelectorProps extends SongSelectorPropsFromState, SongSelectorPropsFromDispatch {
}

interface ConfigSelectorPropsFromState {
    ui: UI,
}

interface ConfigSelectorPropsFromDispatch {
    handleConfigBlurEvent: HandleConfigBlurEvent,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
}

interface ConfigSelectorPropsFromParent {
    song: Song,
}

interface ConfigSelectorProps extends ConfigSelectorPropsFromState,
    ConfigSelectorPropsFromDispatch,
    ConfigSelectorPropsFromParent {
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
