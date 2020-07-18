import {reducerTypes} from '../types'

const SET_CURRENT_IDEA = 'SET_CURRENT_IDEA'
const setCurrentIdea = (payload: reducerTypes.idea) => ({
  type: SET_CURRENT_IDEA,
  payload
})

const TOGGLE_GRID_VIEW = 'TOGGLE_GRID_VIEW'
const toggleGridView = () => ({
  type: TOGGLE_GRID_VIEW,
})

export default {
  SET_CURRENT_IDEA,
  setCurrentIdea,
  TOGGLE_GRID_VIEW,
  toggleGridView
}
