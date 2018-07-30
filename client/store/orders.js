import axios from 'axios'
import history from '../history'
import {deleteCart} from './cart'

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS'
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'
// const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const initialState = {
  orders: [],
  singleOrder: []
}

/**
 * ACTION CREATORS
 */
const getUserOrders = orders => ({type: GET_ORDERS, orders})
//const getOneOrder = order => ({type: GET_SINGLE_ORDER, order})

/**
 * THUNK CREATORS
 */
export const saveOrder = cartId => {
  return async dispatch => {
    try {
      const {order} = await axios.post('/api/carts/'+cartId+'/createorder',{shippingEmail:'emailaddy@email.com'})
      //need to go somewhere

      //successful order means clear lso cartid
      dispatch(deleteCart())
    } catch (err) {
      console.log('Error creating order:',error)
    }
  }

}


export const fetchUserOrders = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders/' + userId)
      dispatch(getUserOrders(data))
    } catch (error) {
      console.log('Error fetching a order:', error)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case GET_SINGLE_ORDER:
      return action.order
    default:
      return state
  }
}
