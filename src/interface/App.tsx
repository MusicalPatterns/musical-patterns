import * as React from 'react'
import { connect } from 'react-redux'
import { songs } from '../song'
import { Dispatch } from 'redux'
import { ActionType } from './actions'
import { SyntheticEvent } from 'react'

interface AppProps {
    onChange: (event: SyntheticEvent<HTMLSelectElement>) => void,
}

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
    onChange: (event: any) => {
        dispatch({type: ActionType.CHOOSE_SONG, data: event.target.value})
    }
})

export default connect(null, mapDispatchToProps)(({onChange}: AppProps) => {
    return (
        <select {...{onChange}}>
            {Object.values(songs).map((song, key) => {
                return <option {...{key}}>{song.name}</option>
            })}
        </select>
    )
})
