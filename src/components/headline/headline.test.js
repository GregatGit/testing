import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'


import { findByTestAttr, checkProps } from '../../../Utils'

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component
}

describe('Headline Component', () => {
  describe('Checking propTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test',
        tempArr: [{
          fName: 'Test Name',
          lName: 'Test Name',
          email: 'test@there.com',
          age: 25,
          onlineStatus: true
        }]
      }
      const propsErr = checkProps(Headline, expectedProps)

      expect(propsErr).toBeUndefined()
    })
  })

  describe('Have props', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        header: 'Test Posts',
        desc: 'Test posts',
      }
      wrapper = setUp(props)
    })

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent')
      expect(component.length).toBe(1)
    })

    it('should have h1 component', () => {
      const component = findByTestAttr(wrapper, 'header')
      expect(component.length).toBe(1)
    })

    it('should have p component', () => {
      const component = findByTestAttr(wrapper, 'desc')
      expect(component.length).toBe(1)
    })
  })

  describe('have no props', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setUp()
    })

    it('should not render without props', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent')
      expect(component.length).toBe(0)
    })

    it('should have no h1 component', () => {
      const component = findByTestAttr(wrapper, 'header')
      expect(component.length).toBe(0)
    })

    it('should have  no p component', () => {
      const component = findByTestAttr(wrapper, 'desc')
      expect(component.length).toBe(0)
    })
  })
})
