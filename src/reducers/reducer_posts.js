import { types } from './../actions/types'

const temp = [{title: 'test 1'}, {title: 'test 2'}, {title: 'test 3'}]

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload
      
    default:
      return state
  }
}