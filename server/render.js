import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript';

import configureStore from '../src/configureStore'
import Home from '../src/modules/home/index.jsx'

export default ({ clientStats }) => (req, res, next) => {
    if (req.path === '/') {
        // const store = configureStore({ pageData: { counter: 10 } })
        
        const store = configureStore()
        const html = ReactDOM.renderToString(
            <Provider store={ store }>
                <Home />
            </Provider>
        )

        const preloadedState = store.getState();
        res.send(renderFullPage(html, preloadedState))
    } else {
        return next()
    }
}

const renderFullPage = (html, preloadedState) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>TestReact16</title>
        </head>
        <body>
            <h1>Demo</h1>
            <div id='root'>${html}</div>
            <script>
                window.__INITIAL_STATE__ = ${serialize(preloadedState)}
            </script>
            <script type="text/javascript" src="./index.js"></script>
        </body>
        </html>
    `
}
