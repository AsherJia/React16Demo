import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger())
)(createStore)

const configureStore = (initialState) => {
    const store = finalCreateStore(rootReducer, initialState)
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default
            store.replaceReducer(nextReducer)
        })
    }
    return store
}

export default configureStore
