import { DictionaryOf } from '../../utilities'
import { TypedMap } from '../types'

type StringifiedPatternSpec = DictionaryOf<string>

type StringifiedPatternSpecInputStates = DictionaryOf<boolean>

type StringifiedPatternSpecEntry = [ string, string ]

enum UiStateKeys {
    DISPLAYED_SONG_SPEC = 'displayedPatternSpec',
    INVALID_SONG_SPEC_INPUTS = 'invalidPatternSpecInputs',
    SUBMITTED_SONG_SPEC = 'submittedPatternSpec',
    UNSUBMITTED_SONG_SPEC_INPUTS = 'unsubmittedPatternSpecInputs',
}

interface Ui {
    [ UiStateKeys.DISPLAYED_SONG_SPEC ]: StringifiedPatternSpec,
    [ UiStateKeys.INVALID_SONG_SPEC_INPUTS ]: StringifiedPatternSpecInputStates,
    [ UiStateKeys.SUBMITTED_SONG_SPEC ]: StringifiedPatternSpec,
    [ UiStateKeys.UNSUBMITTED_SONG_SPEC_INPUTS ]: StringifiedPatternSpecInputStates,
}

type ImmutableUi = TypedMap<Ui>

enum UiActionType {
    SET_SUBMITTED_SONG_SPEC = 'set submitted pattern spec',
    SET_DISPLAYED_SONG_SPEC = 'set displayed pattern spec',
    SET_INVALID_SONG_SPEC_INPUTS = 'set invalid pattern spec inputs',
    SET_UNSUBMITTED_SONG_SPEC_INPUTS = 'set unsubmitted pattern spec inputs',
}

interface SetSubmittedPatternSpec {
    data: StringifiedPatternSpec,
    type: UiActionType.SET_SUBMITTED_SONG_SPEC,
}

interface SetDisplayedPatternSpec {
    data: StringifiedPatternSpec,
    type: UiActionType.SET_DISPLAYED_SONG_SPEC,
}

interface SetInvalidPatternSpecInputs {
    data: StringifiedPatternSpecInputStates,
    type: UiActionType.SET_INVALID_SONG_SPEC_INPUTS,
}

interface SetUnsubmittedPatternSpecInputs {
    data: StringifiedPatternSpecInputStates,
    type: UiActionType.SET_UNSUBMITTED_SONG_SPEC_INPUTS,
}

type UiAction =
    SetSubmittedPatternSpec |
    SetDisplayedPatternSpec |
    SetInvalidPatternSpecInputs |
    SetUnsubmittedPatternSpecInputs

export {
    StringifiedPatternSpecInputStates,
    StringifiedPatternSpec,
    StringifiedPatternSpecEntry,
    Ui,
    ImmutableUi,
    UiStateKeys,
    UiAction,
    UiActionType,
}
