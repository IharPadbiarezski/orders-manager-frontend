import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import CustomerData from './components/customer-data/CustomerData'
import Product from './components/product/Product'
import LabelledInput from './components/labelled-input/LabelledInput'

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
