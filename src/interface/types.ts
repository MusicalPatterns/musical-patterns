import * as React from 'react'
import { Dispatch } from 'redux'
import { Song, SongName } from '../songTypes'
import { Entities } from '../types'

interface InterfaceConfig {
    [index: string]: string,
}

interface HandleConfigChangeParameters {
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    interfaceConfig: InterfaceConfig,
}
interface HandleConfigChangeEventParameters {
    configKey: string,
    event: React.SyntheticEvent<HTMLInputElement>,
    interfaceConfig: InterfaceConfig,
}
type HandleConfigChangeEvent = (handleConfigChangeEventParameters: HandleConfigChangeEventParameters) => void

interface HandleConfigSubmitParameters {
    actualCurrentConfig: InterfaceConfig,
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    entities: Entities,
    song: Song,
}
interface HandleConfigSubmitEventParameters {
    actualCurrentConfig: InterfaceConfig,
    configKey: string,
    entities: Entities,
    event: React.KeyboardEvent,
    song: Song,
}
type HandleConfigSubmitEvent = (handleConfigSubmitEventParameters: HandleConfigSubmitEventParameters) => void

interface HandleSongChangeParameters {
    dispatch: Dispatch,
    entities: Entities,
    songName: SongName,
}
interface HandleSongChangeEventParameters {
    entities: Entities
    event: React.SyntheticEvent<HTMLSelectElement>,
}
type HandleSongChangeEvent = (handleSongChangeEventParameters: HandleSongChangeEventParameters) => void

export {
    InterfaceConfig,
    HandleConfigChangeEvent,
    HandleConfigChangeEventParameters,
    HandleConfigChangeParameters,
    HandleConfigSubmitEvent,
    HandleConfigSubmitEventParameters,
    HandleConfigSubmitParameters,
    HandleSongChangeEvent,
    HandleSongChangeEventParameters,
    HandleSongChangeParameters,
}
