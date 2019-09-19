import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions'
import { OPTIONS_MODES } from '../components/product/Product'

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
  items: [{ id: 1, optionsMode: OPTIONS_MODES.TYPES }],
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
      return [...state, { id: newProductId }]
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
    default:
      return state
  }
}

export { getMaximumProductId }
