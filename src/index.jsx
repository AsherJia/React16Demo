import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Home from './modules/home/index'

const preloadedState = window && window.__INITIAL_STATE__

const store = configureStore(preloadedState)

hydrate(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/home/index', () => {
        const NextHome = require('./modules/home/index').default

        hydrate(
            <Provider store={store}>
                <NextHome />
            </Provider>,
            document.getElementById('root')
        )
    })
}
