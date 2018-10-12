import { InterfaceConfig, InterfaceConfigValidities } from '../interface/state'
import {
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
    invalidInputs: InterfaceConfigValidities,
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
    actualCurrentConfig: InterfaceConfig,
    entities: Entities,
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    interfaceConfig: InterfaceConfig,
    invalidInputs: InterfaceConfigValidities,
    song: Song,
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
