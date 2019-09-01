import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

describe('App', () => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const defaultProps = {
    onRemoveProduct: () => {},
    onAddProduct: () => {},
    products: [],
  }

  function render(props = {}) {
    const localProps = {
      ...defaultProps,
      ...props,
    }
    ReactDOM.render(<App {...localProps} />, container)
  }

  function querySelectorAll(...params) {
    return container.querySelectorAll(...params)
  }

  afterEach(() => ReactDOM.unmountComponentAtNode(container))

  it('should render without crashing', () => {
    render()
  })

  it('should render products', () => {
    render({
      products: [{ id: 1 }, { id: 2 }, { id: 3 }],
    })
    expect(querySelectorAll('.products > *')).toHaveLength(3)
  })

  it('should render 0 products', () => {
    render({
      products: [],
    })
    expect(querySelectorAll('.products > *')).toHaveLength(0)
  })

  it(
    'should call addProduct callback on click on add product button ' +
      'without arguments',
    () => {
      const onAddProduct = jest.fn()
      render({
        onAddProduct,
      })

      const addProductButton = querySelectorAll('.btn-add-product')[0]
      addProductButton.click()

      expect(onAddProduct).toHaveBeenCalledWith()
    }
  )
})
