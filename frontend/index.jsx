import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Reducer
import RootReducer from 'reducers/root_reducer'

// Saga
import rootSaga from 'sagas/root_saga'

// Components
import Root from 'components/root'

// Plugins
import { isEmpty } from 'lodash'
import './util/pusher'

const sagaMiddleware = createSagaMiddleware()

// Configure Store
const configureStore = (preLoadedState = {}) => {
  return createStore(
    RootReducer,
    preLoadedState,
    compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f)
  )
}

// Instantiate Store
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store
  
  if (isEmpty(window.currentUser)) {
    store = configureStore()
  } else {
    const initialState = { session: { currentUser: window.currentUser } }
    store = configureStore(initialState)
  }
  
  sagaMiddleware.run(rootSaga)
  
  ReactDOM.render(<Root store={ store } />, root)
})