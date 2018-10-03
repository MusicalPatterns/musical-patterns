import * as React from 'react'
import { connect } from 'react-redux'
import { Song } from '../types'
import { State } from './state'

interface AppProps {
    song: Song,
}

const mapStateToProps = (state: State): AppProps => ({
    song: state.get('song'),
})

export default connect(mapStateToProps)((props: AppProps) => <div>{props.song.name}</div>)
