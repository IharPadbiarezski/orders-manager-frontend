import React from 'react'
import './CustomerData.css'

function CustomerData() {
  return (
    <div className="customer-data">
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
    </div>
  )
}

export default CustomerData
