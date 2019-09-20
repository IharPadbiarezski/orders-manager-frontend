import { OPTIONS_MODES } from '../components/product/Product'

const createProduct = ({ id, optionsMode = OPTIONS_MODES.TYPES, type }) => ({
  id,
  optionsMode,
  type,
})

export default createProduct
