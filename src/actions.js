export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const SELECT_PRODUCT_TYPE = 'SELECT_PRODUCT_TYPE'

export const addProduct = () => ({ type: ADD_PRODUCT })

export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, payload: { id } })

export const selectProductType = (productId, productType) => ({
  type: SELECT_PRODUCT_TYPE,
  payload: { productId, productType },
})
