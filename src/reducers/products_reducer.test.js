import reducer, { getMaximumProductId } from './products_reducer'
import { addProduct, removeProduct } from '../actions'
import { OPTIONS_MODES } from '../components/product/Product'

describe('products reducer', () => {
  it('handles addProduct action', () => {
    const actual = reducer({ items: [{ id: 1 }] }, addProduct())
    const expected = {
      items: [{ id: 1 }, { id: 2, optionsMode: OPTIONS_MODES.TYPES }],
    }
    expect(actual).toEqual(expected)
  })

  it('handles addProduct action with complex state', () => {
    const state = { items: [{ id: 1 }, { id: 3 }] }
    const actual = reducer(state, addProduct())
    const expected = {
      items: [
        { id: 1 },
        { id: 3 },
        { id: 4, optionsMode: OPTIONS_MODES.TYPES },
      ],
    }
    expect(actual).toEqual(expected)
  })

  it('handles removeProduct action', () => {
    const state = { items: [{ id: 1 }, { id: 2 }] }
    const actual = reducer(state, removeProduct(1))
    const expected = { items: [{ id: 2 }] }
    expect(actual).toEqual(expected)
  })

  it('handles removeProduct action 2', () => {
    const state = { items: [{ id: 1 }, { id: 2 }, { id: 5 }] }
    const actual = reducer(state, removeProduct(2))
    const expected = { items: [{ id: 1 }, { id: 5 }] }
    expect(actual).toEqual(expected)
  })
})

describe('getMaximumProductId', () => {
  it('returns maximum product id for 1 product', () => {
    expect(getMaximumProductId([{ id: 1 }])).toBe(1)
  })

  it('returns maximum product id for 2 products', () => {
    const products = [{ id: 10 }, { id: 20 }]
    expect(getMaximumProductId(products)).toBe(20)
  })

  it('returns maximum product id for 5 products', () => {
    const products = [
      { id: 2 },
      { id: 10 },
      { id: 13 },
      { id: 50 },
      { id: 100 },
    ]
    expect(getMaximumProductId(products)).toBe(100)
  })
})
