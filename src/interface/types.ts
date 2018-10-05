import * as React from 'react'
import { SongName } from '../songTypes'
import { Entity } from '../types'
import { Config } from './state'

interface AppPropsFromState {
    config: Config,
    entities: Entity[],
    songName: SongName,
}

type HandleConfigChangeEvent =
    (event: React.SyntheticEvent<HTMLInputElement>, configKey: string, entities: Entity[], songName: SongName) => void

type HandleSongChangeEvent =
    (event: React.SyntheticEvent<HTMLSelectElement>, entities: Entity[]) => void

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
