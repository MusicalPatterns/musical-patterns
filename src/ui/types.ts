import * as React from 'react'
import { Dispatch } from 'redux'
import { Song, SongID } from '../songTypes'
import { UI } from '../state/state'

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
    song: Song,
    ui: UI,
}
interface HandleConfigSubmitEventParameters {
    configKey: string,
    event: React.KeyboardEvent,
    song: Song,
    ui: UI,
}
type HandleConfigSubmitEvent = (handleConfigSubmitEventParameters: HandleConfigSubmitEventParameters) => void

interface HandleSongChangeParameters {
    currentSong?: Song,
    dispatch: Dispatch,
    newlySelectedSongId: SongID,
}
interface HandleSongChangeEventParameters {
    event: React.SyntheticEvent<HTMLSelectElement>,
    song?: Song,
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
