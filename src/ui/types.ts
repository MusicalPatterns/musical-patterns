import * as React from 'react'
import { Dispatch } from 'redux'
import { Song, SongId, Songs, SongSpec } from '../../songs'
import { ImmutableThreads, ImmutableUi } from '../state'

interface HandleSongSpecChangeParameters {
    dispatch: Dispatch,
    songSpecKey: string,
    songSpecValue: string,
    ui: ImmutableUi,
}
interface HandleSongSpecChangeEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    songSpecKey: string,
    ui: ImmutableUi,
}
type HandleSongSpecChangeEvent = (handleSongSpecChangeEventParameters: HandleSongSpecChangeEventParameters) => void

interface HandleSongSpecSubmitParameters {
    dispatch: Dispatch,
    songId: SongId,
    songSpecKey: string,
    songSpecValue: string,
    threads: ImmutableThreads,
    ui: ImmutableUi,
}
interface HandleSongSpecSubmitEventParameters {
    event: React.KeyboardEvent,
    songId: SongId,
    songSpecKey: string,
    threads: ImmutableThreads,
    ui: ImmutableUi,
}
type HandleSongSpecSubmitEvent = (handleSongSpecSubmitEventParameters: HandleSongSpecSubmitEventParameters) => void

interface HandleSongChangeParameters {
    dispatch: Dispatch,
    songId: SongId,
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
    ui: ImmutableUi,
}
interface HandleSongSpecBlurEventParameters {
    event: React.SyntheticEvent<HTMLInputElement>,
    songSpecKey: string,
    ui: ImmutableUi,
}
type HandleSongSpecBlurEvent = (handleSongSpecBlurEventParameters: HandleSongSpecBlurEventParameters) => void

type PartialSongs = {[key in Partial<SongId>]: Song}

type SongsFilter = (songs: Songs) => PartialSongs

interface RecompileAndRestartParameters {
    dispatch: Dispatch,
    songId: SongId,
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
    PartialSongs,
    SongsFilter,
    RecompileAndRestartParameters,
}
