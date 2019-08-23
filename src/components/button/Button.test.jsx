import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

describe('Button', () => {
  const container = document.createElement('div')
  const defaultProps = {
    children: 'test',
  }

  function render(props) {
    const localProps = {
      ...defaultProps,
      ...props,
    }
    ReactDOM.render(<Button {...localProps} />, container)
  }

  function querySelectorAll(...params) {
    return container.querySelectorAll(...params)
  }

  function getElement() {
    return container.childNodes[0]
  }

  afterEach(() => ReactDOM.unmountComponentAtNode(container))

  it('should render one button element', () => {
    render()
    expect(querySelectorAll('button')).toHaveLength(1)
  })

  it('should pass additional classes to the element', () => {
    render({ className: 'awesome-button' })
    expect(getElement().classList.contains('awesome-button')).toBe(true)
  })

  it('should pass any other passed props to the tag', () => {
    render({ id: 'nice-button' })
    expect(getElement().getAttribute('id')).toBe('nice-button')
  })

  it('should render children as text', () => {
    render({ children: 'test content' })
    expect(getElement().innerHTML).toBe('test content')
  })

  it('should render children as node', () => {
    render({ children: <span>text</span> })
    expect(getElement().innerHTML).toBe('<span>text</span>')
  })
})
