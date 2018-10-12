import * as React from 'react'
import { Dispatch } from 'redux'
import { Song, SongName } from '../songTypes'
import { Entities } from '../types'
import { StringifiedConfig, StringifiedConfigStates } from './state'

interface HandleConfigChangeParameters {
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    displayedConfig: StringifiedConfig,
    invalidConfigInputs: StringifiedConfigStates,
}
interface HandleConfigChangeEventParameters {
    configKey: string,
    displayedConfig: StringifiedConfig,
    event: React.SyntheticEvent<HTMLInputElement>,
    invalidConfigInputs: StringifiedConfigStates,
}
type HandleConfigChangeEvent = (handleConfigChangeEventParameters: HandleConfigChangeEventParameters) => void

interface HandleConfigSubmitParameters {
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    entities: Entities,
    invalidConfigInputs: StringifiedConfigStates,
    song: Song,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
}
interface HandleConfigSubmitEventParameters {
    configKey: string,
    entities: Entities,
    event: React.KeyboardEvent,
    invalidConfigInputs: StringifiedConfigStates,
    song: Song,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
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
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
}
interface HandleConfigBlurEventParameters {
    configKey: string,
    event: React.SyntheticEvent<HTMLInputElement>,
    submittedConfig: StringifiedConfig,
    unsubmittedConfigInputs: StringifiedConfigStates,
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
