import { CustomConfig, CustomConfigEntry, SongName, StandardConfig, StandardConfigEntry } from '../songTypes'
import { Entities } from '../types'

interface AppPropsFromState {
    customConfig: CustomConfig,
    entities: Entities,
    songName: SongName,
    standardConfig: StandardConfig,
}

interface AppPropsFromDispatch {
    handleCustomConfigChangeEvent: HandleCustomConfigChangeEvent,
    handleSongChangeEvent: HandleSongChangeEvent,
    handleStandardConfigChangeEvent: HandleStandardConfigChangeEvent,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

interface CustomConfigSelectorProps {
    customConfig: CustomConfig,
    entities: Entities,
    handleCustomConfigChangeEvent: HandleCustomConfigChangeEvent,
    songName: SongName,
}

interface StandardConfigSelectorProps {
    entities: Entities,
    handleStandardConfigChangeEvent: HandleStandardConfigChangeEvent,
    songName: SongName,
    standardConfig: StandardConfig,
}

type HandleCustomConfigChangeEvent = (
    event: React.SyntheticEvent<HTMLInputElement>,
    customConfigKey: string,
    entities: Entities,
    songName: SongName,
) => void

type HandleStandardConfigChangeEvent = (
    event: React.SyntheticEvent<HTMLInputElement>,
    standardConfigKey: string,
    entities: Entities,
    songName: SongName,
) => void

type HandleSongChangeEvent =
    (event: React.SyntheticEvent<HTMLSelectElement>, entities: Entities) => void

interface SongSelectorProps {
    entities: Entities,
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface CustomConfigOptionProps {
    customConfigEntry: CustomConfigEntry,
    customConfigSelectorProps: CustomConfigSelectorProps,
}

interface StandardConfigOptionProps {
    standardConfigEntry: StandardConfigEntry,
    standardConfigSelectorProps: StandardConfigSelectorProps,
}

export {
    HandleCustomConfigChangeEvent,
    HandleSongChangeEvent,
    AppProps,
    AppPropsFromState,
    AppPropsFromDispatch,
    CustomConfigSelectorProps,
    StandardConfigSelectorProps,
    StandardConfigOptionProps,
    SongSelectorProps,
    CustomConfigOptionProps,
}
