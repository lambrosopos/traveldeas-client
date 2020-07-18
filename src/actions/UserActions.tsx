const USER_SIGNIN = 'USER_SIGNIN'
const userSignin = (payload: boolean) => ({
  type: USER_SIGNIN,
  payload
})

const USER_SIGNOUT = 'USER_SIGNOUT'
const userSignout = (payload: boolean) => ({
  type: USER_SIGNOUT,
  payload
})

const USER_SIGNUP = 'USER_SIGNUP'
const userSignup = (payload: boolean) => ({
  type: USER_SIGNUP,
  payload
})

export default {
  USER_SIGNIN,
  userSignin,
  USER_SIGNOUT,
  userSignout,
  USER_SIGNUP,
  userSignup
}
