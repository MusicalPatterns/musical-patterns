import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
// tslint:disable-next-line:no-import-side-effect no-reaching-imports
import '../styles/main.scss'
import { App } from './components'
import { activateContextInMobileBrowserEnvironments, loadAllSamples } from './perform'
import { rootReducer } from './state'

loadAllSamples()
activateContextInMobileBrowserEnvironments()

const root: HTMLDivElement = document.createElement('div')
document.body.appendChild(root)

const store: Store = createStore(rootReducer)
store.subscribe(() => render(<Provider store={store}><App/></Provider>, root))

render(<Provider store={store}><App/></Provider>, root)
