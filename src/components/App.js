import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import Items from './Items'
import ItemForm from './ItemForm'
import '../styles/styles.css'

function App(props) {
  return (
    <Provider store={store}>
      <div className='App'>
        <ItemForm />
        <Items />
      </div>
    </Provider>
  )
}

export default App
