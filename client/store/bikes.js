import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_BIKES = 'GET_BIKES'
const GET_SINGLE_BIKE = 'GET_SINGLE_BIKE'
const ADD_BIKE = 'ADD_BIKE'
const ADD_FILTER = 'ADD_FILTER'
const FILTER_BIKES = 'FILTER_BIKES'
// const UPDATE_BIKE = 'UPDATE_BIKE'
// const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const initialState = {
    bikes: [],
    filteredBikes: [],
    selectedCategoryVals: [],
    singleBike: {},
}

/**
 * ACTION CREATORS
 */
const getBikes = bikes => ({type: GET_BIKES, bikes})
const getOneBike = bike => ({type: GET_SINGLE_BIKE, bike})
const addFilter = categoryVal => ({type: ADD_FILTER, categoryVal})
const filterBikes = () => ({type: FILTER_BIKES})
// const bikeUpdated = () => ({type: UPDATE_BIKE})

/**
 * THUNK CREATORS
 */

 export const fetchBikes = () => {
   return async dispatch => {
     let res
     try {
         res = await axios.get('/api/bikes')
         await dispatch(getBikes(res.data))
     } catch (err) {
       console.log(err)
     }
   }
 }

 export const fetchBike = bikeId => {
   return async dispatch => {
     try {
       const { data } = await axios.get(`/api/bikes/${bikeId}`)
       await dispatch(getOneBike(data))
     } catch (err) {
       console.log(err)
     }
   }
 }

 export const fetchOneBike = (id) => async dispatch => {
     let res
     try {
         res = await axios.get(`/api/bikes/${id}`)
     } catch(err) {
         //more pending error handling
         return dispatch(getOneBike({error: err.message}))
     }
     try {
         dispatch(getOneBike(res.data))
         history.push(`/bikes/${id}`)
     } catch(err) {
         console.error(err)
     }
 }

 export const filter = categoryVal => {
   return async dispatch => {
     // console.log('inside filter thunk - categoryVal:', categoryVal);
     await dispatch(addFilter(categoryVal))
     await dispatch(filterBikes())
   }
 }

 export const updateBike = (bikeId, bikeData) => {
   return async dispatch => {
     try {
       await axios({
         method: 'put',
         url: `/api/bikes/${bikeId}`,
         data: bikeData
       })
       await dispatch(getBikes())
     } catch (err) {
       console.log(err)
     }
   }
 }

 export const postBike = (bikeData) => {
   return async dispatch => {
     // try {
     //   await axios({
     //     method: 'post',
     //     url: '/api/bikes',
     //     data: bikeData, // make sure this is being passed in properly to line up with db names
     //   })
     //   dispatch(fetchBikes())
     // }
     // catch (err) {
     //   console.log(err)
     // }
     // try {
     //   await axios.post('/api/bikes', {
     //     name: this.state.name,
     //     description: this.state.description,
     //     price: this.state.price,
     //     inventory: this.state.inventory,
     //     availability: this.state.availability,
     //   })
     //   // dispatch(fetchBikes())
     //   console.log('bike submitted!');
     // }
     // catch (err) {
     //   console.log(err)
     // }
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
  let newFilteredBikes = []
  let categoryVal
  switch (action.type) {
    case GET_BIKES:
        return {...state, bikes: action.bikes, filteredBikes: action.bikes}
    case ADD_FILTER:
        categoryVal = parseInt(action.categoryVal) // we want this as a number not string
        if (!state.selectedCategoryVals.includes(categoryVal)) { // add the category val if it doesn't exist
          return {...state, selectedCategoryVals: [...state.selectedCategoryVals, categoryVal]}
        } else { // remove categoryVal if it exists
          return {...state, selectedCategoryVals: [...state.selectedCategoryVals.filter(val => val !== categoryVal)]}
        }
    case FILTER_BIKES:
        // if we have no selectedCategoryVals
        if (state.selectedCategoryVals.length <= 0) {
          return {...state, filteredBikes: [...state.bikes]}
        } else {
          [...state.bikes].forEach(bike => {
            bike.categoryvalues.forEach(catVal => {
              if (state.selectedCategoryVals.includes(catVal.id)) {
                newFilteredBikes.push(bike)
                return // we don't want to add the bike more than once
              }
            })
          })
          return {...state, filteredBikes: newFilteredBikes}
        }
    case GET_SINGLE_BIKE:
        return {...state, singleBike: action.bike}
    default:
      return state
  }
}
