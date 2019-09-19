import React from 'react'
import ReactDOM from 'react-dom'
import { Product, OPTIONS_MODES } from './Product'

describe('Product', () => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  function render(props) {
    ReactDOM.render(<Product id={1} {...props} />, container)
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

  it('renders 0 types', () => {
    render({ types: [] })
    const productTypes = querySelectorAll('.product__types > *')
    expect(productTypes).toHaveLength(0)
  })

  it('renders 2 types', () => {
    const types = [{ id: 1, value: 'first' }, { id: 2, value: 'second' }]
    render({
      types,
    })
    const productTypesButtons = querySelectorAll('.product__types > *')
    expect(productTypesButtons).toHaveLength(2)
  })

  it(
    'calls onSelectProductType prop with productType object, ' +
      'when user clicks on type',
    () => {
      const types = [{ id: 1, value: 'test' }]
      const onSelectProductType = jest.fn()
      render({
        types,
        onSelectProductType,
      })
      const productTypesButtons = querySelectorAll('.product__types > *')
      productTypesButtons[0].click()
      expect(onSelectProductType).toHaveBeenCalledWith({ id: 1, value: 'test' })
    }
  )

  it('renders parameters when mode is parameters and they are passed', () => {
    const parameters = [
      {
        name: 'size',
        options: [
          {
            text: 'L',
            value: 'L',
          },
        ],
      },
      {
        name: 'material',
        options: [
          {
            text: 'cotton',
            value: 'cotton',
          },
          {
            text: 'sink',
            value: 'sink',
          },
        ],
      },
    ]
    render({
      optionsMode: OPTIONS_MODES.PARAMETERS,
      parameters,
    })
    const parameterElements = querySelectorAll('.product__parameters > *')
    expect(parameterElements).toHaveLength(2)
  })
})
