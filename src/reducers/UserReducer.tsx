import INITIAL_STATE from './UserReducer_InitialState'
import {UserActions as UA} from '../actions/'

const UserReducer = (state = INITIAL_STATE, action: any) => {
  const {type} = action
  switch (type) {
    case UA.USER_SIGNOUT: {
      return Object.assign({}, state, {
        isLoggedIn: false
      })
    }
    case UA.USER_SIGNIN: {
      return Object.assign({}, state, {
        isLoggedIn: true
      })
    }
    case UA.USER_SIGNUP: {
      return Object.assign({}, state, {
        isLoggedIn: false
      })
    }
    default: {
      return state
    }
  }
}

export default UserReducer
