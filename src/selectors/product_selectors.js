export const selectMockTypes = (state) => state.products.types

export const selectOptionsMode = (state, productId) =>
  state.products.items.find((product) => product.id === productId).optionsMode

export const selectMockParameters = (state) => state.products.parameters

export const selectProducts = (state) => state.products.items
