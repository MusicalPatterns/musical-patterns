import { createStore, Store } from 'redux'
import { reducer } from '../../../src/state/reducer'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../../../src/components/App'
import * as React from 'react'

describe('user interface', () => {
    describe('submitting config', () => {
        xit('won\'t work until i can connect to wifi and install jsdom again', () => {
            const root: HTMLDivElement = document.createElement('div')
            document.body.appendChild(root)

            const store: Store = createStore(reducer)
            store.subscribe(() => render(<Provider store={store}><App/></Provider>, root))

            render(<Provider store={store}><App/></Provider>, root)

            console.log(document.querySelector('input'))
        })
    })
})
