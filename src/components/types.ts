import { SongId } from '../../songs'
import { ImmutableThreads, ImmutableUI } from '../state'
import {
    HandleSongChangeEvent,
    HandleSongSpecBlurEvent,
    HandleSongSpecChangeEvent,
    HandleSongSpecSubmitEvent,
} from '../ui'
import { Maybe } from '../utilities'

interface AppProps {
    songId: Maybe<SongId>,
}

interface SongSelectPropsFromState {
    threads: ImmutableThreads,
}

interface SongSelectPropsFromDispatch {
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface SongSelectProps extends SongSelectPropsFromState, SongSelectPropsFromDispatch {
}

interface SongSpecInputsPropsFromState {
    threads: ImmutableThreads,
    ui: ImmutableUI,
}

interface SongSpecInputsPropsFromDispatch {
    handleSongSpecBlurEvent: HandleSongSpecBlurEvent,
    handleSongSpecChangeEvent: HandleSongSpecChangeEvent,
    handleSongSpecSubmitEvent: HandleSongSpecSubmitEvent,
}

interface SongSpecInputsPropsFromParent {
    songId: SongId,
}

interface SongSpecInputsProps extends SongSpecInputsPropsFromState,
    SongSpecInputsPropsFromDispatch,
    SongSpecInputsPropsFromParent {
}

interface SongSpecInputProps {
    songSpecInputsProps: SongSpecInputsProps,
    songSpecKey: string,
}

export {
    AppProps,
    SongSpecInputsProps,
    SongSpecInputsPropsFromState,
    SongSpecInputsPropsFromDispatch,
    SongSpecInputProps,
    SongSelectProps,
    SongSelectPropsFromState,
    SongSelectPropsFromDispatch,
}
