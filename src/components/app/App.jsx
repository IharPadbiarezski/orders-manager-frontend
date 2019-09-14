import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import Nav from '../nav'
import LabelledInput from '../labelled-input'
import Product from '../product'
import Button from '../button'
import CustomerData from '../customer-data'
import { addProduct, removeProduct } from '../../actions'

const productTypes = [
  { id: 1, value: 'одеяло' },
  { id: 2, value: 'подушка' },
  { id: 3, value: 'постельное бельё' },
  { id: 4, value: 'простыня на резинке' },
  { id: 5, value: 'наматрасник' },
  { id: 6, value: 'плед' },
  { id: 7, value: 'полотенце' },
]

function App({ products, onAddProduct, onRemoveProduct }) {
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
              {products.map(({ id }) => (
                <Product
                  key={id}
                  onRemove={() => onRemoveProduct(id)}
                  types={productTypes}
                />
              ))}
            </div>
            <Button className="btn-add-product" onClick={() => onAddProduct()}>
              +
            </Button>
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

App.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onAddProduct: PropTypes.func,
  onRemoveProduct: PropTypes.func,
}

App.defaultProps = {
  products: [],
  onAddProduct: () => {},
  onRemoveProduct: () => {},
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = {
  onAddProduct: addProduct,
  onRemoveProduct: removeProduct,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export { App }
