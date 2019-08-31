export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const addProduct = () => ({ type: ADD_PRODUCT })

export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, payload: { id } })
