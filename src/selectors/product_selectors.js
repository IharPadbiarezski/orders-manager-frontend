export const selectMockTypes = (state) => state.products.types

export const selectProducts = (state) => state.products.items

export const selectOptionsMode = (state, productId) =>
  selectProducts(state).find((product) => product.id === productId).optionsMode

export const selectMockParameters = (state) => state.products.parameters
