export type infoEntry = {
  title: string
  key: string
  description: string
}

export type idea = {
  idea: string
  key: string
  icon?: string
  info?: infoEntry[]
}

export type IDEAS_INITIAL_STATE = {
  showGrid: boolean
  isLoggedIn: boolean
  ideaList: idea[]
  currentIdea: idea
  info?: infoEntry[]
}

export type action = {
  type: string
  payload: any
}
