import * as React from 'react'
import { Dispatch } from 'redux'
import { Song, SongName } from '../songTypes'
import { Entities } from '../types'
import { InterfaceConfig, InterfaceConfigStates } from './state'

interface HandleConfigChangeParameters {
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    interfaceConfig: InterfaceConfig,
    invalidInputs: InterfaceConfigStates,
}
interface HandleConfigChangeEventParameters {
    configKey: string,
    event: React.SyntheticEvent<HTMLInputElement>,
    interfaceConfig: InterfaceConfig,
    invalidInputs: InterfaceConfigStates,
}
type HandleConfigChangeEvent = (handleConfigChangeEventParameters: HandleConfigChangeEventParameters) => void

interface HandleConfigSubmitParameters {
    actualCurrentConfig: InterfaceConfig,
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    entities: Entities,
    invalidInputs: InterfaceConfigStates,
    song: Song,
    unsubmittedInputs: InterfaceConfigStates,
}
interface HandleConfigSubmitEventParameters {
    actualCurrentConfig: InterfaceConfig,
    configKey: string,
    entities: Entities,
    event: React.KeyboardEvent,
    invalidInputs: InterfaceConfigStates,
    song: Song,
    unsubmittedInputs: InterfaceConfigStates,
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

interface HandleConfigBlurParameters {
    actualCurrentConfig: InterfaceConfig,
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    unsubmittedInputs: InterfaceConfigStates,
}
interface HandleConfigBlurEventParameters {
    actualCurrentConfig: InterfaceConfig,
    configKey: string,
    event: React.SyntheticEvent<HTMLInputElement>,
    unsubmittedInputs: InterfaceConfigStates,
}
type HandleConfigBlurEvent = (handleConfigBlurEventParameters: HandleConfigBlurEventParameters) => void

export {
    HandleConfigChangeEvent,
    HandleConfigChangeEventParameters,
    HandleConfigChangeParameters,
    HandleConfigSubmitEvent,
    HandleConfigSubmitEventParameters,
    HandleConfigSubmitParameters,
    HandleSongChangeEvent,
    HandleSongChangeEventParameters,
    HandleSongChangeParameters,
    HandleConfigBlurEvent,
    HandleConfigBlurEventParameters,
    HandleConfigBlurParameters,
}
