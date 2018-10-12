import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import App from './components/App'
import { emptySong } from './interface/emptySong'
import { handleSongChange } from './interface/handleSongChange'
import { reducer } from './interface/reducer'

const root: HTMLDivElement = document.createElement('div')
document.body.appendChild(root)

const store: Store = createStore(reducer)
store.subscribe(() => render(<Provider store={store}><App/></Provider>, root))

// tslint:disable-next-line:no-floating-promises
handleSongChange({ dispatch: store.dispatch, song: emptySong, entities: [] })
