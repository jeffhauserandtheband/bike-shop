import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_BIKES = 'GET_BIKES'
const GET_SINGLE_BIKE = 'GET_SINGLE_BIKE'
// const REMOVE_USER = 'REMOVE_USER'
const GOT_FILTERED_BIKES = 'GOT_FILTERED_BIKES'

/**
 * INITIAL STATE
 */
const initialState = {
  bikes: [],
  singleBike: [],
  filteredBikes: [],
}

/**
 * ACTION CREATORS
 */
const getBikes = bikes => ({type: GET_BIKES, bikes})
const getOneBike = bike => ({type: GET_SINGLE_BIKE, bike})
const gotFilteredBikes = bikes => ({type: GOT_FILTERED_BIKES, bikes})

/**
 * THUNK CREATORS
 */

export const fetchBikes = () => async dispatch => {
  let res
  try {
    res = await axios.get('/api/bikes')
  } catch (err) {
    //pending error handling
    return dispatch(getBikes({error: err.message}))
  }

  try {
    dispatch(getBikes(res.data))
    history.push('/bikes')
  } catch (err) {
    console.error(err)
  }
}

export const fetchOneBike = id => async dispatch => {
  let res
  try {
    res = await axios.get(`/api/bikes/${id}`)
  } catch (err) {
    //more pending error handling
    return dispatch(getOneBike({error: err.message}))
  }

  try {
    dispatch(getOneBike(res.data))
    history.push(`/bikes/${id}`)
  } catch (err) {
    console.error(err)
  }
}

// filter some bikes
export const filterBikes = (bikes, value) => {

  return dispatch => {

    let filteredBikes = []
    bikes.forEach(bike => {
      bike.categoryvalues.forEach(category => {
        if(category.name === value) {
          filteredBikes.push(bike)
          console.log('bike added! ', bike.id, bike.name, category.name)
        }
      })
    })
    console.log('these are some filtered bikes', filteredBikes)
    dispatch(gotFilteredBikes(filteredBikes))  // return a new array of bikes
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
    case GET_BIKES:
      return {...state, bikes: action.bikes}
    case GET_SINGLE_BIKE:
      return {...state, singleBike: action.bike}
    case GOT_FILTERED_BIKES:
      return {...state, filteredBikes: action.bikes}
    default:
      return state
  }
}
