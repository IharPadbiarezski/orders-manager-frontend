import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>
          <label htmlFor="order-id">
            Добавить заказ №
            <input
              type="number"
              value="1307"
              id="order-id"
              className="order-id-input"
            />
          </label>
        </h1>

        <main>
          <section className="wrapper">
            <div className="products">
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
            </div>
            <button
              type="button"
              id="add-product"
              className="button btn-add-product"
            >
              +
            </button>
            <button
              type="button"
              id="save-order"
              className="button btn-save-order"
            >
              Сохранить заказ
            </button>
          </section>
          <aside>
            <label htmlFor="order-datetime">
              Дата и время заказа
              <input
                type="text"
                id="order-datetime"
                className="flatpickr-input"
                readOnly="readonly"
              />
            </label>
            <label htmlFor="delivery-date">
              Дата доставки
              <input
                type="text"
                id="delivery-date"
                className="flatpickr-input"
                readOnly="readonly"
              />
            </label>
            <label htmlFor="delivery-time">
              Время доставки
              <input type="text" id="delivery-time" />
            </label>
            <label htmlFor="main-phone-input">
              Телефон
              <input id="main-phone-input" required="" />
            </label>
            <label htmlFor="add-phone-input">
              Доп. телефон
              <input id="add-phone-input" />
            </label>
            <div className="address">
              <label htmlFor="index-input">
                Индекс
                <input id="index-input" type="number" />
              </label>
              <label htmlFor="area-input">
                Область
                <input type="text" id="area-input" />
              </label>
              <label htmlFor="city-input">
                Город
                <input type="text" value="Минск" id="city-input" />
              </label>
              <label htmlFor="street-type-select">
                Тип улицы
                <select id="street-type-select">
                  <option value="ул">улица</option>

                  <option value="пер">переулок</option>

                  <option value="пр">проезд</option>

                  <option value="бул">бульвар</option>

                  <option value="пл">площадь</option>

                  <option value="тр">тракт</option>

                  <option value="шс">шоссе</option>
                </select>
              </label>
              <label htmlFor="street-input">
                Улица
                <input type="text" id="street-input" />
              </label>
              <label htmlFor="house-input">
                Дом
                <input type="text" id="house-input" />
              </label>
              <label htmlFor="building-input">
                Корпус
                <input type="text" id="building-input" />
              </label>
              <label htmlFor="flat-input">
                Квартира
                <input type="number" id="flat-input" />
              </label>
              <label htmlFor="floor-input">
                Этаж
                <input type="number" id="floor-input" />
              </label>
              <label htmlFor="entrance-input">
                Подъезд
                <input type="number" id="entrance-input" />
              </label>
              <label htmlFor="order-comment-area">
                Комментарий
                <textarea
                  id="order-comment-area"
                  cols="30"
                  rows="3"
                  className="comment-area"
                />
              </label>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default App
