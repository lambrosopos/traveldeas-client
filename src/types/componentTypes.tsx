import {reducerTypes} from './index'
export type IdeasList = {
  ideaList: reducerTypes.idea[]
  showGrid?: boolean
}

export type GridOrListProps = {
  showGrid: boolean
}
