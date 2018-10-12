import * as React from 'react'
import { Dispatch } from 'redux'
import { Song } from '../songTypes'
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
    dispatch: Dispatch,
    entities: Entities,
    interfaceConfig: InterfaceConfig,
    song: Song,
}
interface HandleConfigSubmitEventParameters {
    entities: Entities,
    event: React.KeyboardEvent,
    interfaceConfig: InterfaceConfig,
    song: Song,
}
type HandleConfigSubmitEvent = (handleConfigSubmitEventParameters: HandleConfigSubmitEventParameters) => void

interface HandleSongChangeParameters {
    dispatch: Dispatch,
    entities: Entities,
    song: Song,
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
