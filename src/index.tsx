import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
// tslint:disable-next-line:no-import-side-effect
import '../styles/main.scss'
import App from './components/App'
import { rootReducer } from './state/rootReducer'

const root: HTMLDivElement = document.createElement('div')
document.body.appendChild(root)

const store: Store = createStore(rootReducer)
store.subscribe(() => render(<Provider store={store}><App/></Provider>, root))

render(<Provider store={store}><App/></Provider>, root)
