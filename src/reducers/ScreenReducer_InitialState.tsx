interface INITIAL_STATE {
  currNavigation: string | undefined
  [key: string]: any
}

const INITIAL_STATE: INITIAL_STATE = {
  currNavigation: "HOME",
  isLoggedIn: false,
}

export default INITIAL_STATE
