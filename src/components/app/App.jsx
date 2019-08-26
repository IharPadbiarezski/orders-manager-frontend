import React from 'react'
import './App.css'
import Nav from '../nav'
import CustomerData from '../customer-data'
import Product from '../product'
import LabelledInput from '../labelled-input'

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="order-id-wrapper">
          <LabelledInput
            label="Добавить заказ №"
            type="number"
            inputClassName="order-id-input"
            centered
          />
        </h1>
        <main>
          <section className="main-content-wrapper">
            <div className="products">
              <Product />
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
            <CustomerData />
          </aside>
        </main>
      </div>
    </>
  )
}

export default App
