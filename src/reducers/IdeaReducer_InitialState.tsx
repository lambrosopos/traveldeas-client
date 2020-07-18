import {reducerTypes} from '../types'

const INITIAL_STATE: reducerTypes.IDEAS_INITIAL_STATE = {
  showGrid: true,
  isLoggedIn: false,
  currentIdea: {title: '제주도', key: '1', icon: 'emoticon-cry-outline'},
  ideaList: [
    {title: '제주도', key: '1', icon: 'emoticon-cry-outline'},
    {title: '독도', key: '2', icon: 'emoticon-neutral-outline'},
    {title: '단양', key: '3', icon: 'emoticon-wink'},
    {title: '여수', key: '4', icon: 'emoticon-tongue-outline'},
    {title: '미얀마', key: '5', icon: 'emoticon-sad'},
    {title: '세네갈', key: '6', icon: 'emoticon-poop'},
  ]
}

export default INITIAL_STATE
