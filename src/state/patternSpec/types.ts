import { DictionaryOf } from '../../utilities'
import { StateIndexSignature, TypedMap } from '../types'

type StringifiedPatternSpec = DictionaryOf<string>

type StringifiedPatternSpecInputStates = DictionaryOf<boolean>

type StringifiedPatternSpecEntry = [ string, string ]

enum PatternSpecStateKeys {
    DISABLED_PATTERN_SPEC_BUTTONS = 'disabledPatternSpecButtons',
    DISPLAYED_PATTERN_SPEC = 'displayedPatternSpec',
    INVALID_PATTERN_SPEC_INPUTS = 'invalidPatternSpecInputs',
    SUBMITTED_PATTERN_SPEC = 'submittedPatternSpec',
    UNSUBMITTED_PATTERN_SPEC_INPUTS = 'unsubmittedPatternSpecInputs',
}

interface PatternSpecState extends StateIndexSignature {
    [ PatternSpecStateKeys.DISABLED_PATTERN_SPEC_BUTTONS ]: StringifiedPatternSpecInputStates,
    [ PatternSpecStateKeys.DISPLAYED_PATTERN_SPEC ]: StringifiedPatternSpec,
    [ PatternSpecStateKeys.INVALID_PATTERN_SPEC_INPUTS ]: StringifiedPatternSpecInputStates,
    [ PatternSpecStateKeys.SUBMITTED_PATTERN_SPEC ]: StringifiedPatternSpec,
    [ PatternSpecStateKeys.UNSUBMITTED_PATTERN_SPEC_INPUTS ]: StringifiedPatternSpecInputStates,
}

type ImmutablePatternSpecState = TypedMap<PatternSpecState>

enum PatternSpecStateActionType {
    SET_DISABLED_PATTERN_SPEC_BUTTONS = 'set disabled pattern spec buttons',
    SET_SUBMITTED_PATTERN_SPEC = 'set submitted pattern spec',
    SET_DISPLAYED_PATTERN_SPEC = 'set displayed pattern spec',
    SET_INVALID_PATTERN_SPEC_INPUTS = 'set invalid pattern spec inputs',
    SET_UNSUBMITTED_PATTERN_SPEC_INPUTS = 'set unsubmitted pattern spec inputs',
}

interface SetDisabledSongSpecButtons {
    data: StringifiedPatternSpecInputStates,
    type: PatternSpecStateActionType.SET_DISABLED_PATTERN_SPEC_BUTTONS,
}

interface SetSubmittedPatternSpec {
    data: StringifiedPatternSpec,
    type: PatternSpecStateActionType.SET_SUBMITTED_PATTERN_SPEC,
}

interface SetDisplayedPatternSpec {
    data: StringifiedPatternSpec,
    type: PatternSpecStateActionType.SET_DISPLAYED_PATTERN_SPEC,
}

interface SetInvalidPatternSpecInputs {
    data: StringifiedPatternSpecInputStates,
    type: PatternSpecStateActionType.SET_INVALID_PATTERN_SPEC_INPUTS,
}

interface SetUnsubmittedPatternSpecInputs {
    data: StringifiedPatternSpecInputStates,
    type: PatternSpecStateActionType.SET_UNSUBMITTED_PATTERN_SPEC_INPUTS,
}

type PatternSpecStateAction =
    SetDisabledSongSpecButtons |
    SetSubmittedPatternSpec |
    SetDisplayedPatternSpec |
    SetInvalidPatternSpecInputs |
    SetUnsubmittedPatternSpecInputs

export {
    StringifiedPatternSpecInputStates,
    StringifiedPatternSpec,
    StringifiedPatternSpecEntry,
    PatternSpecState,
    ImmutablePatternSpecState,
    PatternSpecStateKeys,
    PatternSpecStateAction,
    PatternSpecStateActionType,
}
