import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import Nav from '../nav'
import LabelledInput from '../labelled-input'
import ConnectedProduct from '../product'
import Button from '../button'
import CustomerData from '../customer-data'
import { addProduct } from '../../actions'
import { selectProducts } from '../../selectors/product_selectors'

function App({ products, onAddProduct }) {
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
                <ConnectedProduct key={id} id={id} />
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
}

App.defaultProps = {
  products: [],
  onAddProduct: () => {},
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
})

const mapDispatchToProps = {
  onAddProduct: addProduct,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export { App }
