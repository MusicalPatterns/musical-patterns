import { createStore, Store } from 'redux'
import { rootReducer } from '../../../src/state/rootReducer'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../../../src/components/App'
import * as React from 'react'

describe('user interface', () => {
    describe('submitting song spec', () => {
        xit('won\'t work until i can connect to wifi and install jsdom again', () => {
            const root: HTMLDivElement = document.createElement('div')
            document.body.appendChild(root)

            const store: Store = createStore(rootReducer)
            store.subscribe(() => render(<Provider store={store}><App/></Provider>, root))

            render(<Provider store={store}><App/></Provider>, root)

            console.log(document.querySelector('input'))
        })
    })
})
