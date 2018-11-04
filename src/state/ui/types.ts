import { DictionaryOf } from '../../utilities'
import { TypedMap } from '../types'

type StringifiedPatternSpec = DictionaryOf<string>

type StringifiedPatternSpecInputStates = DictionaryOf<boolean>

type StringifiedPatternSpecEntry = [ string, string ]

enum UiStateKeys {
    DISABLED_PATTERN_SPEC_BUTTONS = 'disabledPatternSpecButtons',
    DISPLAYED_PATTERN_SPEC = 'displayedPatternSpec',
    INVALID_PATTERN_SPEC_INPUTS = 'invalidPatternSpecInputs',
    SUBMITTED_PATTERN_SPEC = 'submittedPatternSpec',
    UNSUBMITTED_PATTERN_SPEC_INPUTS = 'unsubmittedPatternSpecInputs',
}

interface Ui {
    [ UiStateKeys.DISABLED_PATTERN_SPEC_BUTTONS ]: StringifiedPatternSpecInputStates,
    [ UiStateKeys.DISPLAYED_PATTERN_SPEC ]: StringifiedPatternSpec,
    [ UiStateKeys.INVALID_PATTERN_SPEC_INPUTS ]: StringifiedPatternSpecInputStates,
    [ UiStateKeys.SUBMITTED_PATTERN_SPEC ]: StringifiedPatternSpec,
    [ UiStateKeys.UNSUBMITTED_PATTERN_SPEC_INPUTS ]: StringifiedPatternSpecInputStates,
}

type ImmutableUi = TypedMap<Ui>

enum UiActionType {
    SET_DISABLED_PATTERN_SPEC_BUTTONS = 'set disabled pattern spec buttons',
    SET_SUBMITTED_PATTERN_SPEC = 'set submitted pattern spec',
    SET_DISPLAYED_PATTERN_SPEC = 'set displayed pattern spec',
    SET_INVALID_PATTERN_SPEC_INPUTS = 'set invalid pattern spec inputs',
    SET_UNSUBMITTED_PATTERN_SPEC_INPUTS = 'set unsubmitted pattern spec inputs',
}

interface SetDisabledSongSpecButtons {
    data: StringifiedPatternSpecInputStates,
    type: UiActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS,
}

interface SetSubmittedPatternSpec {
    data: StringifiedPatternSpec,
    type: UiActionType.SET_SUBMITTED_PATTERN_SPEC,
}

interface SetDisplayedPatternSpec {
    data: StringifiedPatternSpec,
    type: UiActionType.SET_DISPLAYED_PATTERN_SPEC,
}

interface SetInvalidPatternSpecInputs {
    data: StringifiedPatternSpecInputStates,
    type: UiActionType.SET_INVALID_PATTERN_SPEC_INPUTS,
}

interface SetUnsubmittedPatternSpecInputs {
    data: StringifiedPatternSpecInputStates,
    type: UiActionType.SET_UNSUBMITTED_PATTERN_SPEC_INPUTS,
}

type UiAction =
    SetDisabledSongSpecButtons |
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
