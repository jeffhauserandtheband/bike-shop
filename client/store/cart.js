/* eslint-disable max-statements */
/* eslint-disable complexity */
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
    cartId: 0, //real cart has id>=1, matching db key
    subtotal: 0.00,
    quantity: 0,
    cartEntries: []
}

/**
 * ACTION CREATORS
 */
const updateCart = cart => ({type: UPDATE_CART, cart})
export const deleteCart = () => ({type: DELETE_CART})

/**
 * THUNK CREATORS
 */

export const deleteCartEntry = (cartId,bikeId) => async dispatch => {
    let res
    try {
        res = await axios.delete(`/api/carts/${cartId}/${bikeId}/all`)
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

 export const incrementCart = (cartId,bikeId) => async dispatch => {

    if (cartId==0) { //do a double equal here in case of type issues
        const cartLso = JSON.parse(localStorage.bikeShopCartId || "{}")
        if (cartLso.cartId) {
            cartId = cartLso.cartId;
        }

        if (cartId>0) {
            //verify cart exists
            let cart;
            try {
            const res = await axios.get(`/api/carts/${cartId}`)
            cart=res.data
            } catch (err) {
                //disregard any error,  if real probs, will handle below
                cartId = 0
            }
            if (cart.cartId) {
                cartId = cart.cartId;
            } else {
                cartId = 0
            }
        }
    }

    let res
    try {
        res = await axios.post(`/api/carts/${cartId}/${bikeId}`)
    } catch (err) {
        //pending error handling
        return dispatch(updateCart({error: err.message}))
    }
    if (res.data.msg) {
        //need an alert
        alert(res.data.msg+"\nclick ok to continue")
        delete res.data.msg
    }
    try {
        dispatch(updateCart(res.data));
    } catch (err) {
        console.log(err)
    }
 }

 export const decrementCart = (cartId,bikeId) => async dispatch => {
    let res
    try {
        res = await axios.delete(`/api/carts/${cartId}/${bikeId}`)
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
    //save cart id as lso
        localStorage.bikeShopCartId = JSON.stringify({cartId: action.cart.cartId})
        return action.cart
    case DELETE_CART:
        delete localStorage.bikeShopCartId
        return initialState;
    default:
      return state
  }
}
