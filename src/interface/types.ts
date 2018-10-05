import * as React from 'react'
import { SongName } from '../songTypes'
import { Entities } from '../types'
import { Config } from './state'

interface AppPropsFromState {
    config: Config,
    entities: Entities,
    songName: SongName,
}

type HandleConfigChangeEvent =
    (event: React.SyntheticEvent<HTMLInputElement>, configKey: string, entities: Entities, songName: SongName) => void

type HandleSongChangeEvent =
    (event: React.SyntheticEvent<HTMLSelectElement>, entities: Entities) => void

interface AppPropsFromDispatch {
    handleConfigChangeEvent: HandleConfigChangeEvent,
    handleSongChangeEvent: HandleSongChangeEvent,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

export {
    HandleConfigChangeEvent,
    HandleSongChangeEvent,
    AppProps,
    AppPropsFromState,
    AppPropsFromDispatch,
}
