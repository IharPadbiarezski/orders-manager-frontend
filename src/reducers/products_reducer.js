import { ADD_PRODUCT, REMOVE_PRODUCT, SELECT_PRODUCT_TYPE } from '../actions'
import { OPTIONS_MODES } from '../components/product/Product'
import createProduct from '../models/product'

const productTypes = [
  { id: 1, value: 'одеяло' },
  { id: 2, value: 'подушка' },
  { id: 3, value: 'постельное бельё' },
  { id: 4, value: 'простыня на резинке' },
  { id: 5, value: 'наматрасник' },
  { id: 6, value: 'плед' },
  { id: 7, value: 'полотенце' },
]

const initialState = {
  items: [createProduct({ id: 1 })],
  types: productTypes,
  parameters: [
    {
      name: 'размер',
      options: [
        {
          text: 'M',
          value: 'M',
        },
        {
          text: 'L',
          value: 'L',
        },
      ],
    },
    {
      name: 'материал',
      options: [
        {
          text: 'хлопок',
          value: 'хлопок',
        },
        {
          text: 'шелк',
          value: 'шелк',
        },
      ],
    },
    {
      name: 'производитель',
      options: [
        {
          text: 'беларусь',
          value: 'беларусь',
        },
      ],
    },
    {
      name: 'плотность',
      options: [
        {
          text: 'плотный',
          value: 'плотный',
        },
      ],
    },
    {
      name: 'тип',
      options: [
        {
          text: 'важный',
          value: 'важный',
        },
      ],
    },
  ],
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
