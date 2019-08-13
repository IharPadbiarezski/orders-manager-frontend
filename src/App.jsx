import React from 'react'
import './App.css'
import Nav from './components/nav'
import CustomerData from './components/customer-data'
import Product from './components/product'
import LabelledInput from './components/labelled-input'

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>
          <LabelledInput
            label="Добавить заказ №"
            type="number"
            inputClassName="order-id-input"
          />
        </h1>
        <main>
          <section className="wrapper">
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
