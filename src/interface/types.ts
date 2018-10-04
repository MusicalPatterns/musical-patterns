import * as React from 'react'
import { Config } from './state'

interface AppPropsFromState {
    config: Config,
}

type HandleConfigChange = (event: React.SyntheticEvent<HTMLInputElement>, configKey: string) => void

type HandleSongChange = (event: React.SyntheticEvent<HTMLSelectElement>) => void

interface AppPropsFromDispatch {
    handleConfigChange: HandleConfigChange,
    handleSongChange: HandleSongChange,
}

interface AppProps extends AppPropsFromState, AppPropsFromDispatch {
}

export {
    HandleConfigChange,
    AppProps,
    AppPropsFromState,
    AppPropsFromDispatch,
}
