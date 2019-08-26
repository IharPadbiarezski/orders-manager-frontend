import React from 'react'
import './Product.css'
import LabelledInput from '../labelled-input'
import '../../assets/fontello/css/fontello.css'

export default function Product() {
  return (
    <section className="product" data-product-type-id="0">
      <div className="product__close-wrapper">
        <i className="icon-close product__close" />
      </div>
      <LabelledInput
        label="Имя товара"
        inputClassName="name-input"
        disabled
        centered
      />
      <span className="product__type">Тип товара</span>
      <section className="product__buttons-wrapper">
        <button
          type="button"
          className="button product__choose-type-button"
          value="1"
        >
          одеяло
        </button>
        <button
          type="button"
          className="button product__choose-type-button"
          value="2"
        >
          подушка
        </button>
        <button
          type="button"
          className="button product__choose-type-button"
          value="3"
        >
          постельное белье
        </button>
        <button
          type="button"
          className="button product__choose-type-button"
          value="4"
        >
          простыня на резинке
        </button>
        <button
          type="button"
          className="button product__choose-type-button"
          value="5"
        >
          наматрасник
        </button>
        <button
          type="button"
          className="button product__choose-type-button"
          value="6"
        >
          плед
        </button>
        <button
          type="button"
          className="button product__choose-type-button"
          value="7"
        >
          полотенце
        </button>
      </section>
      <div className="product__inputs">
        <LabelledInput
          label="Закупочная цена товара"
          inputClassName="purchase-price-input"
          required
          centered
        />
        <LabelledInput
          label="Цена товара"
          inputClassName="price-input"
          required
          centered
        />
        <LabelledInput
          label="Количество товаров"
          inputClassName="number-input"
          defaultValue="1"
          type="number"
          centered
        />
      </div>
      <LabelledInput
        label="Комментарий"
        renderInput={() => (
          <textarea
            id="comment-area-1"
            cols="30"
            rows="3"
            className="comment-area"
          />
        )}
        centered
      />
    </section>
  )
}
