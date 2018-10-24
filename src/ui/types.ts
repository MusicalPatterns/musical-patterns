import * as React from 'react'
import { Dispatch } from 'redux'
import { SongID } from '../songIds'
import { UI } from '../state/state'
import { Threads } from '../types'

interface HandleSongSpecChangeParameters {
    dispatch: Dispatch,
    songSpecKey: string,
    songSpecValue: string,
    ui: UI,
}
interface HandleSongSpecChangeEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    songSpecKey: string,
    ui: UI,
}
type HandleSongSpecChangeEvent = (handleSongSpecChangeEventParameters: HandleSongSpecChangeEventParameters) => void

interface HandleSongSpecSubmitParameters {
    dispatch: Dispatch,
    songId: SongID,
    songSpecKey: string,
    songSpecValue: string,
    threads: Threads,
    ui: UI,
}
interface HandleSongSpecSubmitEventParameters {
    event: React.KeyboardEvent,
    songId: SongID,
    songSpecKey: string,
    threads: Threads,
    ui: UI,
}
type HandleSongSpecSubmitEvent = (handleSongSpecSubmitEventParameters: HandleSongSpecSubmitEventParameters) => void

interface HandleSongChangeParameters {
    dispatch: Dispatch,
    songId: SongID,
    threads: Threads,
}
interface HandleSongChangeEventParameters {
    event: React.SyntheticEvent<HTMLSelectElement>,
    threads: Threads,
}
type HandleSongChangeEvent = (handleSongChangeEventParameters: HandleSongChangeEventParameters) => void

interface HandleSongSpecBlurParameters {
    dispatch: Dispatch,
    songSpecKey: string,
    songSpecValue: string,
    ui: UI,
}
interface HandleSongSpecBlurEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    songSpecKey: string,
    ui: UI,
}
type HandleSongSpecBlurEvent = (handleSongSpecBlurEventParameters: HandleSongSpecBlurEventParameters) => void

export {
    HandleSongSpecChangeEvent,
    HandleSongSpecChangeEventParameters,
    HandleSongSpecChangeParameters,
    HandleSongSpecSubmitEvent,
    HandleSongSpecSubmitEventParameters,
    HandleSongSpecSubmitParameters,
    HandleSongChangeEvent,
    HandleSongChangeEventParameters,
    HandleSongChangeParameters,
    HandleSongSpecBlurEvent,
    HandleSongSpecBlurEventParameters,
    HandleSongSpecBlurParameters,
}
