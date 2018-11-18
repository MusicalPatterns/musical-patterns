import { setupPerformer } from '@musical-patterns/performer'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// tslint:disable-next-line:no-import-side-effect no-reaching-imports
import '../styles/main.scss'
import { App, onPerformerUpdate } from './components'
import { store } from './state'

const root: HTMLDivElement = document.createElement('div')
document.body.appendChild(root)

store.subscribe(() => render(<Provider store={store}><App/></Provider>, root))

render(<Provider store={store}><App/></Provider>, root)

setupPerformer({ onUpdate: onPerformerUpdate })
