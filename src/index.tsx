import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ActionType } from './interface/actions'
import App from './interface/App'
import { store } from './interface/store'
import { SongName } from './songTypes'

const root: HTMLDivElement = document.createElement('div')
document.body.appendChild(root)
store.subscribe(() => render(<Provider store={store}><App/></Provider>, root))

store.dispatch({type: ActionType.CHOOSE_SONG, data: SongName.BEATEN_PATH})
