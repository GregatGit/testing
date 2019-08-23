import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../../Utils'
import ListItem from './index'

describe('ListItem Component', () => {
  
  describe('Checking prop-types', () => {
    
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'test string',
        content: 'test string'
      }
      const propsError = checkProps(ListItem, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('Compenent Renders', () => {
    
    let wrapper
    beforeEach(() => {
      const props = {
        title: 'test string',
        content: 'test string'
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItem')
      expect(component.length).toBe(1)
    })

    it('Should render a title', ()=> {
      const title = findByTestAttr(wrapper, 'title')
      expect(title.length).toBe(1)
    })

    it('should render context', ()=> {
      const context = findByTestAttr(wrapper, 'context')
      expect(context.length).toBe(1)
    })
  })

  describe('Should not render', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        content: 'test string'
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('Component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'listItem')
      expect(component.length).toBe(0)
    })
  
  })
  
})
