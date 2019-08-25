import React from 'react'
import './CustomerData.css'
import LabelledInput from '../labelled-input'
import LabelledDateInput from '../labelled-date-input'

function CustomerData() {
  return (
    <div className="customer-data">
      <LabelledDateInput label="Дата заказа" />
      <LabelledDateInput label="Дата доставки" />
      <LabelledInput label="Время доставки" />
      <LabelledInput label="Телефон" />
      <LabelledInput label="Доп. телефон" />
      <LabelledInput label="Индекс" type="number" />
      <LabelledInput label="Область" />
      <LabelledInput label="Город" />
      <LabelledInput
        label="Тип улицы"
        renderInput={() => (
          <select>
            <option value="ул">улица</option>
            <option value="пер">переулок</option>
            <option value="пр">проезд</option>
            <option value="бул">бульвар</option>
            <option value="пл">площадь</option>
            <option value="тр">тракт</option>
            <option value="шс">шоссе</option>
          </select>
        )}
      />
      <LabelledInput label="Улица" />
      <LabelledInput label="Дом" />
      <LabelledInput label="Корпус" />
      <LabelledInput label="Квартира" type="number" />
      <LabelledInput label="Этаж" type="number" />
      <LabelledInput label="Подъезд" type="number" />
      <LabelledInput
        label="Комментарий"
        renderInput={() => (
          <textarea
            id="order-comment-area"
            cols="30"
            rows="3"
            className="comment-area"
          />
        )}
      />
    </div>
  )
}

export default CustomerData
