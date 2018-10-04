import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionType } from './actions'
import AppPresenter from './AppPresenter'
import { State } from './state'
import { AppPropsFromDispatch, AppPropsFromState } from './types'

const RADIX: number = 10

const mapStateToProps: (state: State) => AppPropsFromState =
    (state: State): AppPropsFromState => ({
        config: state.get('config'),
    })

const mapDispatchToProps: (dispatch: Dispatch) => AppPropsFromDispatch =
    (dispatch: Dispatch): AppPropsFromDispatch => ({
        handleConfigChange: (event: React.SyntheticEvent<HTMLInputElement>, configKey: string): void => {
            const target: HTMLInputElement = event.target as HTMLInputElement
            dispatch({type: ActionType.UPDATE_SONG_CONFIG, data: {configKey, value: parseInt(target.value, RADIX)}})
        },
        handleSongChange: (event: React.SyntheticEvent<HTMLSelectElement>): void => {
            const target: HTMLSelectElement = event.target as HTMLSelectElement
            dispatch({type: ActionType.CHOOSE_SONG, data: target.value})
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(AppPresenter)
