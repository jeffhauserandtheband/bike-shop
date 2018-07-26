import axios from 'axios'
import history from '../history'

//ACTION TYPES

const CREATE_REVIEW = 'CREATE_REVIEW'

//INITIAL STATE

const initialState = {
    review: []
}

//ACTION CREATORS 

const createReview = review => ({type: CREATE_REVIEW, review})

//THUNK CREATOR 

export const postReview = (revInput) => async dispatch => {
    console.log('woop', revInput)
    let res
    try {
        res = await axios.post('/api/review/', revInput)
        console.log('res.data',res)
        dispatch(createReview(res.data))
        // history.push('/review')
    } catch (err) {
        return dispatch(createReview({error: err.message}))
    }

    // try {
    //     console.log('poo',res.data)
        
        
    // } catch (err) {
    //     console.error(err)
    // }
}

//REDUCER

export default function(state = initialState,action) {
    switch (action.type){

        case CREATE_REVIEW:
            return {...state, review: action.review}

        default:
            return state
    }
}