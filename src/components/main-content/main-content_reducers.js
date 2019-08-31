import { combineReducers } from 'redux'
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

const initialState = [{ id: 1 }]

function getMaximumProductId(products) {
  const ids = products.map((product) => product.id)
  return Math.max(...ids)
}

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newProductId = getMaximumProductId(state) + 1
      return [...state, { id: newProductId }]
    }
    case REMOVE_PRODUCT:
      return state.filter(({ id }) => id !== action.payload.id)
    default:
      return state
  }
}

const app = combineReducers({ products: productsReducer })

export default app
