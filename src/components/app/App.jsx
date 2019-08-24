import React from 'react'
import './App.css'
import Nav from '../nav'
import CustomerData from '../customer-data'
import Product from '../product'
import LabelledInput from '../labelled-input'
import Button from '../button'

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
          />
        </h1>
        <main>
          <section className="main-content-wrapper">
            <div className="products">
              <Product />
            </div>
            <Button className="btn-add-product">+</Button>
            <Button className="btn-save-order">Сохранить заказ</Button>
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
