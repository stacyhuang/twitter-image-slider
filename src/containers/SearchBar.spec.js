import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { SearchBar } from './SearchBar'

const setup = propOverrides => {
  const props = Object.assign({
    dispatch: jest.fn()
  }, propOverrides)
  
  const renderer = TestUtils.createRenderer()

  renderer.render(
    <SearchBar {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('SearchBar', () => {
    it('should renderer correctly', () => {
      const { output } = setup()
      expect(output.props.placeholder).toEqual('Search for a #hashtag')
      expect(output.props.value).toEqual('')
      expect(output.props.className).toBe('searchBar')
    })

    it('should update value on change', () => {
      const { output, renderer } = setup()
      output.props.onChange({ target: { value: '@everlane' } })
      const updated = renderer.getRenderOutput()
      expect(updated.props.value).toEqual('@everlane')
    })

    it('should reset state on return key press', () => {
      const { output, renderer } = setup()
      output.props.onChange({ target: { value: '@everlane' } })
      output.props.onKeyDown({ which: 13, target: { value: '@everlane' } })
      const updated = renderer.getRenderOutput()
      expect(updated.props.value).toEqual('')
    })
  })
})
