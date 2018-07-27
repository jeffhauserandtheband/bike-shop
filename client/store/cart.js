import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const UPDATE_CART = 'UPDATE_CART'
const DELETE_CART = 'DELETE_CART'
// const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const initialState = {
    id: 0,
    subtotal: 0.00,
    quantity: 0,
    cartEntries: []
}

/**
 * ACTION CREATORS
 */
const updateCart = cart => ({type: UPDATE_CART, cart})
const deleteCart = cart => ({type: DELETE_CART, cart})

/**
 * THUNK CREATORS
 */

 export const incrementCart = (cartId,bikeId) => async dispatch => {
    let res
    try {
        res = await axios.post(`/api/cart/${cartId}/${bikeId}`)
    } catch (err) {
        //pending error handling
        return dispatch(updateCart({error: err.message}))
    }
    try {
        dispatch(updateCart(res.data));
    } catch (err) {
        console.log(err)
    }
 }

 export const decrementCart = (cartId,bikeId) => async dispatch => {

 }





// export const auth = (email, password, method) => async dispatch => {
//   let res
//   try {
//     res = await axios.post(`/auth/${method}`, {email, password})
//   } catch (authError) {
//     return dispatch(getUser({error: authError}))
//   }

//   try {
//     dispatch(getUser(res.data))
//     history.push('/home')
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr)
//   }
// }



/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
        return action.cart
    default:
      return state
  }
}
