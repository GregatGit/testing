import { types } from './../actions/types'
import reducerPosts from './reducer_posts'

describe('Post Reducer', () => {
  
  it('should return default state', ()=> {
    const newState = reducerPosts(undefined, {})
    expect(newState).toEqual([])
  })

  it('should return new state if receiving type', () => {
    const posts = [{title: 'test 1'}, {title: 'test 2'}, {title: 'test 3'}]
    const newState = reducerPosts(undefined, {
      type: types.GET_POSTS,
      payload: posts
     })
     expect(newState).toEqual(posts)
  })
})
