export type idea = {
  title: string
  key: string
  icon?: string
}

export type IDEAS_INITIAL_STATE = {
  showGrid: boolean
  isLoggedIn: boolean
  ideaList: idea[]
  currentIdea: idea
}

export type action = {
  type: string
  payload: any
}
