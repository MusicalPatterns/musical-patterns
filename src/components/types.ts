import {
    HandleConfigChangeEvent,
    HandleConfigSubmitEvent,
    HandleSongChangeEvent,
} from '../interface/types'
import { CustomConfigEntry, Song, StandardConfigEntry } from '../songTypes'
import { Entities } from '../types'

interface AppPropsFromState {
    entities: Entities,
    song: Song,
}

interface AppPropsFromDispatch {
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    handleCustomConfigChangeEvent: HandleConfigChangeEvent,
    handleSongChangeEvent: HandleSongChangeEvent,
    handleStandardConfigChangeEvent: HandleConfigChangeEvent,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

interface CustomConfigSelectorProps {
    entities: Entities,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    handleCustomConfigChangeEvent: HandleConfigChangeEvent,
    song: Song,
}

interface StandardConfigSelectorProps {
    entities: Entities,
    handleConfigSubmitEvent: HandleConfigSubmitEvent,
    handleStandardConfigChangeEvent: HandleConfigChangeEvent,
    song: Song,
}

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
    AppProps,
    AppPropsFromState,
    AppPropsFromDispatch,
    CustomConfigSelectorProps,
    StandardConfigSelectorProps,
    StandardConfigOptionProps,
    SongSelectorProps,
    CustomConfigOptionProps,
}
