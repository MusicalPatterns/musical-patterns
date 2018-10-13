import * as React from 'react'
import { Dispatch } from 'redux'
import { Song, SongID } from '../songTypes'
import { UI } from '../state/state'
import { Entities } from '../types'

interface HandleConfigChangeParameters {
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    ui: UI,
}
interface HandleConfigChangeEventParameters {
    configKey: string,
    event: React.SyntheticEvent<HTMLInputElement>,
    ui: UI,
}
type HandleConfigChangeEvent = (handleConfigChangeEventParameters: HandleConfigChangeEventParameters) => void

interface HandleConfigSubmitParameters {
    configKey: string,
    configValue: string,
    dispatch: Dispatch,
    entities: Entities,
    song: Song,
    ui: UI,
}
interface HandleConfigSubmitEventParameters {
    configKey: string,
    entities: Entities,
    event: React.KeyboardEvent,
    song: Song,
    ui: UI,
}
type HandleConfigSubmitEvent = (handleConfigSubmitEventParameters: HandleConfigSubmitEventParameters) => void

interface HandleSongChangeParameters {
    dispatch: Dispatch,
    entities: Entities,
    songId: SongID,
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
    ui: UI,
}
interface HandleConfigBlurEventParameters {
    configKey: string,
    event: React.SyntheticEvent<HTMLInputElement>,
    ui: UI,
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
