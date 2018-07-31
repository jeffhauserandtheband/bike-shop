import axios from 'axios'
import history from '../history'

//ACTION TYPES

const CREATE_REVIEW = 'CREATE_REVIEW'
const GET_REVIEW = 'GET_REVIEW'

//INITIAL STATE

const initialState = {
    review: [],
    gReview: []
}

//ACTION CREATORS 

const createReview = review => ({type: CREATE_REVIEW, review})
const getReview = greview => ({type: GET_REVIEW, greview})

//THUNK CREATOR 

export const postReview = (revInput, bikeId) => async dispatch => {
    let res
    try {
        res = await axios.post('/api/review/', revInput)
        dispatch(createReview(res.data))
        history.push(`/bikes/${bikeId}`)
    } catch (err) {
        return dispatch(createReview({error: err.message}))
    }
}

export const fetchReview = (id) => async dispatch => {   
    let res
    try {
        res = await axios.get(`/api/review/${id}`)
        
        dispatch(getReview(res.data))
    } catch(err) {
        return dispatch(getReview({error: err.message}))
    }
}

//REDUCER

export default function(state = initialState,action) {
    switch (action.type){

        case CREATE_REVIEW:
            return {...state, review: action.review}

        case GET_REVIEW:
            return {...state, greview: action.greview}

        default:
            return state
    }
}