export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const CHOOSE_PRODUCT_TYPE = 'CHOOSE_PRODUCT_TYPE'

export const addProduct = () => ({ type: ADD_PRODUCT })

export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, payload: { id } })

export const chooseProductType = (productId, productType) => ({
  type: CHOOSE_PRODUCT_TYPE,
  payload: { productId, productType },
})
