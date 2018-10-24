import { SongID } from '../songIds'
import { UI } from '../state/state'
import { Threads } from '../types'
import {
    HandleSongChangeEvent,
    HandleSongSpecBlurEvent,
    HandleSongSpecChangeEvent,
    HandleSongSpecSubmitEvent,
} from '../ui/types'

interface AppProps {
    songId?: SongID,
}

interface SongSelectPropsFromState {
    threads: Threads,
}

interface SongSelectPropsFromDispatch {
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface SongSelectProps extends SongSelectPropsFromState, SongSelectPropsFromDispatch {
}

interface SongSpecInputsPropsFromState {
    threads: Threads,
    ui: UI,
}

interface SongSpecInputsPropsFromDispatch {
    handleSongSpecBlurEvent: HandleSongSpecBlurEvent,
    handleSongSpecChangeEvent: HandleSongSpecChangeEvent,
    handleSongSpecSubmitEvent: HandleSongSpecSubmitEvent,
}

interface SongSpecInputsPropsFromParent {
    songId: SongID,
}

interface SongSpecInputsProps extends SongSpecInputsPropsFromState,
    SongSpecInputsPropsFromDispatch,
    SongSpecInputsPropsFromParent {
}

interface SongSpecInputProps {
    invalid: boolean,
    songSpecInputsProps: SongSpecInputsProps,
    songSpecKey: string,
    songSpecValue: string,
    unsubmitted: boolean,
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
