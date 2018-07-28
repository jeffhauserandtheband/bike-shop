import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'

import categories from './filter'
import bikes from './bikes'
import review from './review'
import orders from './orders'


import cart from './cart'

const reducer = combineReducers({user, bikes, categories, review, cart, orders})


const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './bikes'
export * from './review'
export * from './orders'
export * from './cart'
