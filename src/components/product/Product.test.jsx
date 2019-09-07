import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product'

describe('Product', () => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  function render(props) {
    ReactDOM.render(<Product {...props} />, container)
  }

  function querySelectorAll(...params) {
    return container.querySelectorAll(...params)
  }

  afterEach(() => ReactDOM.unmountComponentAtNode(container))

  it('renders', () => {
    render()
  })

  it(
    'calls onRemove prop without arguments,' +
      ' when user clicks on remove button',
    () => {
      const onRemove = jest.fn()
      render({ onRemove })
      const removeButton = querySelectorAll('button.product__close-button')[0]
      removeButton.click()
      expect(onRemove).toHaveBeenCalledWith()
    }
  )

  it('renders 0 product types', () => {
    render({ productTypes: [] })
    const productTypes = querySelectorAll('.product__product-types > *')
    expect(productTypes).toHaveLength(0)
  })

  it('renders 2 product types', () => {
    const productTypes = [{ id: 1, value: 'first' }, { id: 2, value: 'second' }]
    render({
      productTypes,
    })
    const productTypesButtons = querySelectorAll('.product__product-types > *')
    expect(productTypesButtons).toHaveLength(2)
  })

  it(
    'calls onSelectProductType prop with productType object, ' +
      'when user clicks on product type',
    () => {
      const productTypes = [{ id: 1, value: 'test' }]
      const onSelectProductType = jest.fn()
      render({
        productTypes,
        onSelectProductType,
      })
      const productTypesButtons = querySelectorAll(
        '.product__product-types > *'
      )
      productTypesButtons[0].click()
      expect(onSelectProductType).toHaveBeenCalledWith({ id: 1, value: 'test' })
    }
  )
})
