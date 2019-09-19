import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'
import LabelledInput from '../labelled-input'
import '../../assets/fontello/css/fontello.css'
import ProductTypeButton from './product-type-button'
import Button from '../button'
import ProductParameter from '../product-parameter'
import { removeProduct } from '../../actions'
import { connect } from 'react-redux'

const OPTIONS_MODES = {
  TYPES: 'types',
  PARAMETERS: 'parameters',
}

function Product({
  onRemove,
  types,
  onSelectProductType,
  optionsMode,
  parameters,
}) {
  return (
    <section className="product">
      <div className="product__close-wrapper">
        <Button className="product__close-button" onClick={() => onRemove()}>
          <i className="icon-close" />
        </Button>
      </div>
      <LabelledInput
        label="Имя товара"
        inputClassName="product__name-input"
        disabled
        centered
      />
      <span className="product__type">Тип товара</span>
      {optionsMode === OPTIONS_MODES.TYPES && (
        <section className="product__types">
          {types.map(({ id, value }) => (
            <ProductTypeButton
              key={id}
              onClick={() => onSelectProductType({ id, value })}
            >
              {value}
            </ProductTypeButton>
          ))}
        </section>
      )}
      {optionsMode === OPTIONS_MODES.PARAMETERS && (
        <section className="product__parameters">
          {parameters.map((parameter) => (
            <ProductParameter
              options={parameter.options}
              label={parameter.name}
              key={parameter.name}
              labelClassName="product__parameter"
            />
          ))}
        </section>
      )}
      <LabelledInput
        label="Закупочная цена товара"
        labelClassName="product__option"
        required
        centered
      />
      <LabelledInput
        label="Цена товара"
        labelClassName="product__option"
        required
        centered
      />
      <LabelledInput
        label="Количество товаров"
        labelClassName="product__option"
        defaultValue="1"
        type="number"
        centered
      />
      <LabelledInput
        label="Комментарий"
        labelClassName="product__option"
        renderInput={() => (
          <textarea cols="30" rows="3" className="product__comment-area" />
        )}
        centered
      />
    </section>
  )
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.required,
      value: PropTypes.string.required,
    })
  ),
  onSelectProductType: PropTypes.func,
  optionsMode: PropTypes.oneOf([OPTIONS_MODES.TYPES, OPTIONS_MODES.PARAMETERS]),
  parameters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      options: ProductParameter.propTypes.options,
    })
  ),
}

Product.defaultProps = {
  onRemove: () => {},
  types: [],
  onSelectProductType: () => {},
  optionsMode: OPTIONS_MODES.TYPES,
  parameters: [],
}

const mapStateToProps = (state, ownProps) => ({
  types: state.products.types,
  optionsMode: state.products.items[ownProps.id - 1].optionsMode,
  parameters: state.products.parameters,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(removeProduct(ownProps.id)),
})

const ConnectedProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export default ConnectedProduct
export { OPTIONS_MODES, Product }
