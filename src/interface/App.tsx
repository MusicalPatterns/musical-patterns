import * as React from 'react'
import { connect } from 'react-redux'
import { Song } from '../types'
import { State } from './state'
import { songs } from '../song'
import { Dispatch } from 'redux'
import { ActionType } from './actions'
import { SyntheticEvent } from 'react'

interface AppPropsFromState {
    song: Song,
}

interface AppPropsFromDispatch {
    onChange: (event: SyntheticEvent<HTMLSelectElement>) => void,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

const mapStateToProps = (state: State): AppPropsFromState => ({
    song: state.get('song'),
})

const mapDispatchToProps = (dispatch: Dispatch): AppPropsFromDispatch => ({
    onChange: (event: any) => {
        dispatch({type: ActionType.CHOOSE_SONG, data: event.target.value})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(({song, onChange}: AppProps) => {
    return (
        <select {...{onChange}}>
            {Object.values(songs).map((song, key) => {
                return <option {...{key}}>{song.name}</option>
            })}
        </select>
    )
})
