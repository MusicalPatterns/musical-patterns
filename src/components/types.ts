import { Song } from '../songTypes'
import { Entities } from '../types'
import { StringifiedConfig, StringifiedConfigEntry, StringifiedConfigStates } from '../ui/state'
import {
    HandleConfigBlurEvent,
    HandleConfigChangeEvent,
    HandleConfigSubmitEvent,
    HandleSongChangeEvent,
} from '../ui/types'

interface AppPropsFromState {
    displayedConfig: StringifiedConfig,
    entities: Entities,
    invalidConfigInputs: StringifiedConfigStates,
    song?: Song,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
}

interface AppPropsFromDispatch {
    handleConfigBlurEvent: HandleConfigBlurEvent,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

interface ConfigSelectorProps {
    displayedConfig: StringifiedConfig,
    entities: Entities,
    handleConfigBlurEvent: HandleConfigBlurEvent,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    invalidConfigInputs: StringifiedConfigStates,
    song: Song,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
}

interface SongSelectorProps {
    entities: Entities,
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface ConfigOptionProps {
    configEntry: StringifiedConfigEntry,
    configSelectorProps: ConfigSelectorProps,
    invalid: boolean,
    unsubmitted: boolean,
}

export {
    AppProps,
    AppPropsFromState,
    AppPropsFromDispatch,
    SongSelectorProps,
    ConfigOptionProps,
    ConfigSelectorProps,
}
