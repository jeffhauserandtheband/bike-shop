import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADMIN_GET_USERS = 'ADMIN_GET_USERS'
const ADMIN_GET_ORDERS = 'ADMIN_GET_ORDERS'
const ADMIN_GET_CATEGORIES = 'ADMIN_GET_CATEGORIES'
const ADMIN_DELETE_USER = 'ADMIN_DELETE_USER'
const ADMIN_CHANGE_ORDER_STATUS = 'ADMIN_CHANGE_ORDER_STATUS'
const ADMIN_CHANGE_USER_STATUS = 'ADMIN_CHANGE_USER_STATUS'
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
const updateOrder = order => ({type: ADMIN_CHANGE_ORDER_STATUS, order})
const updateUser = user => ({type: ADMIN_CHANGE_USER_STATUS, user})
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
export const promoteUser =  (status, id) => {
  return async dispatch => {
  let userStatus = {userType: 'admin'} 
  if (status === 'admin'){
    userStatus.userType = 'user'
  }
   
    try {
      const {data} = await axios.put(`/api/users/${id}`, userStatus)

      dispatch(updateUser(data))
    } catch (error) {
      console.error('There was an error updating user', error)
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

export const changeOrderStatus = (status, order) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/orders/${order.id}`, {status})

      dispatch(updateOrder(data))
    } catch (error) {
      console.log('There was an error updating order', error)
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
    case ADMIN_CHANGE_ORDER_STATUS:
      return {
        ...state,
        orders: state.orders.map(
          order => (order.id === action.order.id ? action.order : order)
        )
      }
    case ADMIN_CHANGE_USER_STATUS:
      return {
        ...state,
        users: state.users.map(
          user => (user.id === action.user.id ? action.user : user)
        )
      }
    default:
      return state
  }
}
