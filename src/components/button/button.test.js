import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../../Utils'
import SharedButton from './index'

describe('Shared Button Component', () => {
  
  describe('Checking propTypes', () => {
    
    it('should not throw warning', ()=> {
      const expectedProps = {
        buttonText: 'example test',
        emitEvent: () => {}
      }
      const propsError = checkProps(SharedButton, expectedProps)

      expect(propsError).toBeUndefined()
    })
  })

  describe('Renders', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        buttonText: 'example test',
        emitEvent: () => {}
      }
      wrapper = new shallow(<SharedButton {...props} />)
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1)
    })


  })
})
