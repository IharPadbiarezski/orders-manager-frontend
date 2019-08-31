import React from 'react'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import app from '../main-content/main-content_reducers'
import MainContent from '../main-content/MainContent'

const store = createStore(app, composeWithDevTools())

function App() {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  )
}

export default App
