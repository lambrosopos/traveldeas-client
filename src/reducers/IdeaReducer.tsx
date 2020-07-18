import INITIAL_STATE from './IdeaReducer_InitialState'
import {reducerTypes} from '../types'
import {IdeaActions as IA} from '../actions'

const IdeaReducer = (state = INITIAL_STATE, action: reducerTypes.action) => {
  const {type, payload} = action
  switch (type) {
    case IA.SET_CURRENT_IDEA: {
      return Object.assign({}, state, {
        currentIdea: payload
      })
    }
    case IA.TOGGLE_GRID_VIEW: {
      return Object.assign({}, state, {
        showGrid: !state.showGrid
      })
    }
    default: {
      return state
    }
  }
}

export default IdeaReducer
