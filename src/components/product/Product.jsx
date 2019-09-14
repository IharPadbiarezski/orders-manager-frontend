import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'
import LabelledInput from '../labelled-input'
import '../../assets/fontello/css/fontello.css'
import ProductTypeButton from './product-type-button'
import Button from '../button'

function Product({ onRemove, types, onSelectProductType }) {
  return (
    <section className="product">
      <div className="product__close-wrapper">
        <Button className="product__close-button" onClick={() => onRemove()}>
          <i className="icon-close" />
        </Button>
      </div>
      <LabelledInput
        label="Имя товара"
        inputClassName="name-input"
        disabled
        centered
      />
      <span className="product__type">Тип товара</span>
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
      <LabelledInput
        label="Закупочная цена товара"
        labelClassName="product__parameter"
        required
        centered
      />
      <LabelledInput
        label="Цена товара"
        labelClassName="product__parameter"
        required
        centered
      />
      <LabelledInput
        label="Количество товаров"
        labelClassName="product__parameter"
        defaultValue="1"
        type="number"
        centered
      />
      <LabelledInput
        label="Комментарий"
        labelClassName="product__parameter"
        renderInput={() => (
          <textarea cols="30" rows="3" className="product__comment-area" />
        )}
        centered
      />
    </section>
  )
}

Product.propTypes = {
  onRemove: PropTypes.func,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.required,
      value: PropTypes.string.required,
    })
  ),
  onSelectProductType: PropTypes.func,
}

Product.defaultProps = {
  onRemove: () => {},
  types: [],
  onSelectProductType: () => {},
}

export default Product
