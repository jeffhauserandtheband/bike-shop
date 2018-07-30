import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADMIN_GET_USERS = 'ADMIN_GET_USERS'
const ADMIN_GET_ORDERS = 'ADMIN_GET_ORDERS'
const ADMIN_GET_CATEGORIES = 'ADMIN_GET_CATEGORIES'
const ADMIN_DELETE_USER = 'ADMIN_DELETE_USER'
/**
 * INITIAL STATE
 */
const initialState = {
  users: [],
  orders: [],
  categories: []
}

/**
 * ACTION CREATORS
 */
const getUsers = users => ({type: ADMIN_GET_USERS, users})
const getOrders = orders => ({type: ADMIN_GET_ORDERS, orders})
const getCategories = categories => ({type: ADMIN_GET_CATEGORIES, categories})
const deleteUser = userId => ({type: ADMIN_DELETE_USER, userId})

/**
 * THUNK CREATORS
 */

//Users
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

export const removeUser = userId => {
  return async dispatch => {
    try {
      await axios.delete('/api/users/' + userId)
      dispatch(deleteUser(userId))
    } catch (error) {
      console.error('Error deleting a user:', error)
    }
  }
}

//Orders
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

//Categories
export const fetchCategories = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/bikes/categories')
      dispatch(getCategories(data))
    } catch (error) {
      console.error('Error fetching a categories:', error)
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
    case ADMIN_GET_CATEGORIES:
      return {...state, categories: action.categories}
    case ADMIN_DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.userId)
      }
    default:
      return state
  }
}
