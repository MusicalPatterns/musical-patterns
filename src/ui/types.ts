import * as React from 'react'
import { Dispatch } from 'redux'
import { SongID, SongSpec } from '../song'
import { ImmutableThreads, ImmutableUI } from '../state'

interface HandleSongSpecChangeParameters {
    dispatch: Dispatch,
    songSpecKey: string,
    songSpecValue: string,
    ui: ImmutableUI,
}
interface HandleSongSpecChangeEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    songSpecKey: string,
    ui: ImmutableUI,
}
type HandleSongSpecChangeEvent = (handleSongSpecChangeEventParameters: HandleSongSpecChangeEventParameters) => void

interface HandleSongSpecSubmitParameters {
    dispatch: Dispatch,
    songId: SongID,
    songSpecKey: string,
    songSpecValue: string,
    threads: ImmutableThreads,
    ui: ImmutableUI,
}
interface HandleSongSpecSubmitEventParameters {
    event: React.KeyboardEvent,
    songId: SongID,
    songSpecKey: string,
    threads: ImmutableThreads,
    ui: ImmutableUI,
}
type HandleSongSpecSubmitEvent = (handleSongSpecSubmitEventParameters: HandleSongSpecSubmitEventParameters) => void

interface HandleSongChangeParameters {
    dispatch: Dispatch,
    songId: SongID,
    threads: ImmutableThreads,
}
interface HandleSongChangeEventParameters {
    event: React.SyntheticEvent<HTMLSelectElement>,
    threads: ImmutableThreads,
}
type HandleSongChangeEvent = (handleSongChangeEventParameters: HandleSongChangeEventParameters) => void

interface HandleSongSpecBlurParameters {
    dispatch: Dispatch,
    songSpecKey: string,
    songSpecValue: string,
    ui: ImmutableUI,
}
interface HandleSongSpecBlurEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    songSpecKey: string,
    ui: ImmutableUI,
}
type HandleSongSpecBlurEvent = (handleSongSpecBlurEventParameters: HandleSongSpecBlurEventParameters) => void

interface PartialSongIdObject<T> {
    [ index: string ]: T
}

type FullSongIdObject<T> = { [P in SongID]: T }

type SongIdObjectFilter = <T>(fullSongIdObject: FullSongIdObject<T>) => PartialSongIdObject<T>

interface RecompileAndRestartParameters {
    dispatch: Dispatch,
    songId: SongID,
    songSpec: SongSpec,
}

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
    SongIdObjectFilter,
    FullSongIdObject,
    PartialSongIdObject,
    RecompileAndRestartParameters,
}
