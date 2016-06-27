import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import appReducers from './reducers'
import routes from './routes'

const preloadedState = window.__PRELOADED_STATE__
const store = createStore(appReducers, preloadedState)

render(
  <Provider store={store}>
    {routes.routesInstance}
  </Provider>,
  document.getElementById('container')
)
