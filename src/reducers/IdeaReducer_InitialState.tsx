import {reducerTypes} from '../types'

const INITIAL_STATE: reducerTypes.IDEAS_INITIAL_STATE = {
  showGrid: true,
  isLoggedIn: false,
  currentIdea: {
    idea: '제주도', key: '1', icon: 'emoticon-cry-outline',
    info: [
      {title: '기간', description: '2020.07.30-2020.08.01', key: '1'},
      {title: '이동수단', description: '자동차', key: '2'},
      {title: '숙박', description: 'Motel', key: '3'},
      {title: '위치', description: '여수', key: '4'},
      {title: '예산', description: '50만원', key: '5'},
    ]
  },
  ideaList: [
    {
      idea: '제주도', key: '1', icon: 'emoticon-cry-outline',
      info: [
        {title: '기간', description: '2020.07.30-2020.08.01', key: '1'},
        {title: '이동수단', description: '자동차', key: '2'},
        {title: '숙박', description: 'Motel', key: '3'},
        {title: '예산', description: '50만원', key: '5'},
      ]
    },
    {
      idea: '독도', key: '2', icon: 'emoticon-neutral-outline',
      info: [
        {title: '기간', description: '2020.07.30-2020.08.01', key: '1'},
        {title: '숙박', description: 'My House', key: '3'},
        {title: '위치', description: '독도', key: '4'},
        {title: '예산', description: '0만원', key: '5'},
      ]
    },
    {
      idea: '단양', key: '3', icon: 'emoticon-wink',
      info: [
        {title: '이동수단', description: 'Helicopter', key: '2'},
        {title: '숙박', description: 'Hotel', key: '3'},
        {title: '위치', description: 'ROK', key: '4'},
        {title: '예산', description: '500만원', key: '5'},
      ]
    },
    {
      idea: '여수', key: '4', icon: 'emoticon-tongue-outline',
      info: [
        {title: '이동수단', description: 'ktx', key: '2'},
        {title: '숙박', description: 'AirBnB', key: '3'},
        {title: '예산', description: '50만원', key: '5'},
      ]
    },
    {
      idea: '미얀마', key: '5', icon: 'emoticon-sad',
      info: [
        {title: '숙박', description: 'Pension', key: '3'},
        {title: '위치', description: '동남아시아', key: '4'},
        {title: '예산', description: '100만원', key: '5'},
      ]
    },
    {
      idea: '세네갈', key: '6', icon: 'emoticon-poop',
      info: [
        {title: '이동수단', description: '비행기', key: '2'},
        {title: '숙박', description: 'Hotel', key: '3'},
        {title: '위치', description: 'Africa', key: '4'},
        {title: '예산', description: '200만원', key: '5'},
      ]
    },
  ]
}
export default INITIAL_STATE
