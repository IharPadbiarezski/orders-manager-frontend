import { ADD_PRODUCT, REMOVE_PRODUCT, SELECT_PRODUCT_TYPE } from '../actions'
import { OPTIONS_MODES } from '../components/product/Product'
import createProduct, {
  mockProductParameters,
  mockProductTypes,
} from '../models/product'

const initialState = {
  items: [createProduct({ id: 1 })],
  types: mockProductTypes,
  parameters: mockProductParameters,
}

function getMaximumProductId(products) {
  const ids = products.map((product) => product.id)
  return Math.max(...ids)
}

function itemsReducer(state = initialState.items, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newProductId = getMaximumProductId(state) + 1
      return [...state, createProduct({ id: newProductId })]
    }
    case REMOVE_PRODUCT:
      return state.filter(({ id }) => id !== action.payload.id)
    default:
      return state
  }
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case REMOVE_PRODUCT: {
      return { ...state, items: itemsReducer(state.items, action) }
    }
    case SELECT_PRODUCT_TYPE: {
      return {
        ...state,
        items: state.items.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              type: action.payload.productType,
              optionsMode: OPTIONS_MODES.PARAMETERS,
            }
          }
          return product
        }),
      }
    }
    default:
      return state
  }
}

export { getMaximumProductId }
