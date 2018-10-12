import { InterfaceConfig, InterfaceConfigStates } from '../interface/state'
import {
    HandleConfigBlurEvent,
    HandleConfigChangeEvent,
    HandleConfigSubmitEvent,
    HandleSongChangeEvent,
} from '../interface/types'
import { Song } from '../songTypes'
import { Entities } from '../types'

interface AppPropsFromState {
    actualCurrentConfig: InterfaceConfig,
    entities: Entities,
    interfaceConfig: InterfaceConfig,
    invalidInputs: InterfaceConfigStates,
    song: Song,
    unsubmittedInputs: InterfaceConfigStates,
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
    actualCurrentConfig: InterfaceConfig,
    entities: Entities,
    handleConfigBlurEvent: HandleConfigBlurEvent,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    interfaceConfig: InterfaceConfig,
    invalidInputs: InterfaceConfigStates,
    song: Song,
    unsubmittedInputs: InterfaceConfigStates,
}

interface SongSelectorProps {
    entities: Entities,
    handleSongChangeEvent: HandleSongChangeEvent,
    song: Song,
}

type InterfaceConfigEntry = [string, string]

interface ConfigOptionProps {
    configEntry: InterfaceConfigEntry,
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
    InterfaceConfigEntry,
}
