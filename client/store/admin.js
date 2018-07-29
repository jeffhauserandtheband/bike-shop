import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADMIN_GET_USERS = 'ADMIN_GET_USERS'

/**
 * INITIAL STATE
 */
const initialState = {
  users: []
}

/**
 * ACTION CREATORS
 */
const getUsers = users => ({type: ADMIN_GET_USERS, users})

/**
 * THUNK CREATORS
 */
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getUsers(data))
    } catch (error) {
      console.log('Error fetching a users:', error)
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
    default:
      return state
  }
}
