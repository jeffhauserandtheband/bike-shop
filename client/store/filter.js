import axios from 'axios'

// ACTION TYPES
const GOT_CATEGORIES = 'GOT_CATEGORIES'

// INITIAL STATE
const initialState = {
  categories: []
}

// ACTION CREATORS

const gotCategories = categories => ({
  type: GOT_CATEGORIES,
  categories
})

// THUNK CREATORS
const fetchCategories = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/bikes/categories')
      dispatch(gotCategories(data))
    } catch (err) {
      console.log(err)
    }
  }
}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CATEGORIES:
      return {...state, categories: action.categories}
    default:
      return state
  }
}

// gotCategories()

export {fetchCategories}
