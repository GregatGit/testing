import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, testStore } from '../Utils'
import App from './App'

const setUp = (initalState = {}) => {
  const store = testStore(initalState)
  const wrapper = shallow(<App store={store} />).childAt(0).dive()
  return wrapper
}

describe('App component', () => {

  let wrapper
  beforeEach(() => {
    const initalState = {
      posts: [
        {
          title: 'Exampe 1',
          body: 'some text',
        },
        {
          title: 'Exampe 2',
          body: 'some text',
        },
        {
          title: 'Exampe 3',
          body: 'some text',
        },
      ],
    }
    wrapper = setUp(initalState)
  })

  it('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'app')
    expect(component.length).toBe(1)
  })

  
})
