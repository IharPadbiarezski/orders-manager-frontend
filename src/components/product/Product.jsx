import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <section className="product" data-product-type-id="0">
      <div className="product__close-wrapper">
        <i className="icon-close product__close" />
      </div>
      <label htmlFor="name-input-1" className="name-label">
        Имя товара
        <input
          type="text"
          id="name-input-1"
          className="name-input"
          disabled=""
        />
      </label>
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
        <label htmlFor="purchase-price-input-1">
          Закупочная цена товара
          <input
            type="text"
            id="purchase-price-input-1"
            className="purchase-price-input"
            required=""
          />
        </label>
        <label htmlFor="price-input-1">
          Цена товара
          <input
            type="text"
            id="price-input-1"
            className="price-input"
            required=""
          />
        </label>
        <label htmlFor="number-input-1">
          Количество товаров
          <input
            type="number"
            id="number-input-1"
            className="number-input"
            value="1"
          />
        </label>
      </div>
      <label htmlFor="comment-area-1">
        Комментарий
        <textarea
          id="comment-area-1"
          cols="30"
          rows="3"
          className="comment-area"
        />
      </label>
    </section>
  )
}