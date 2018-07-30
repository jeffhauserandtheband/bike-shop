import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADMIN_GET_USERS = 'ADMIN_GET_USERS'
const ADMIN_GET_ORDERS = 'ADMIN_GET_ORDERS'
/**
 * INITIAL STATE
 */
const initialState = {
  users: [],
  orders: [],
}

/**
 * ACTION CREATORS
 */
const getUsers = users => ({type: ADMIN_GET_USERS, users})
const getOrders = orders => ({type: ADMIN_GET_ORDERS, orders})

/**
 * THUNK CREATORS
 */
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getUsers(data))
    } catch (error) {
      console.error('Error fetching a users:', error)
    }
  }
}
export const fetchOrders = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(getOrders(data))
    } catch (error) {
      console.error('Error fetching a orders:', error)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_GET_USERS:
    return {...state, users: action.users}
    case ADMIN_GET_ORDERS:
    return {...state, orders: action.orders}
    default:
      return state
  }
}
