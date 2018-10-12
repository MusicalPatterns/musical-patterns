import { Song } from '../songTypes'
import { Entities } from '../types'
import { StringifiedConfig, StringifiedConfigEntry, StringifiedConfigStates } from '../ui/state'
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
    displayedConfig: StringifiedConfig,
    entities: Entities,
    invalidConfigInputs: StringifiedConfigStates,
    song: Song,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
}
interface ConfigSelectorPropsFromDispatch {
    handleConfigBlurEvent: HandleConfigBlurEvent,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
}
interface ConfigSelectorProps extends ConfigSelectorPropsFromState, ConfigSelectorPropsFromDispatch {
}

interface ConfigOptionProps {
    configEntry: StringifiedConfigEntry,
    configSelectorProps: ConfigSelectorProps,
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
