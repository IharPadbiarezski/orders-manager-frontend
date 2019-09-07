import reducer, { getMaximumProductId } from './products_reducer'
import { addProduct, removeProduct } from '../actions'

describe('products reducer', () => {
  it('returns the initial state', () => {
    const expected = [{ id: 1 }]
    expect(reducer(undefined, {})).toEqual(expected)
  })

  it('handles addProduct action', () => {
    const actual = reducer([{ id: 1 }], addProduct())
    const expected = [{ id: 1 }, { id: 2 }]
    expect(actual).toEqual(expected)
  })

  it('handles addProduct action with complex state', () => {
    const state = [{ id: 1 }, { id: 3 }]
    const actual = reducer(state, addProduct())
    const expected = [{ id: 1 }, { id: 3 }, { id: 4 }]
    expect(actual).toEqual(expected)
  })

  it('handles removeProduct action', () => {
    const state = [{ id: 1 }, { id: 2 }]
    const actual = reducer(state, removeProduct(1))
    const expected = [{ id: 2 }]
    expect(actual).toEqual(expected)
  })

  it('handles removeProduct action 2', () => {
    const state = [{ id: 1 }, { id: 2 }, { id: 5 }]
    const actual = reducer(state, removeProduct(2))
    const expected = [{ id: 1 }, { id: 5 }]
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
