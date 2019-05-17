import React from 'react'
import state from './state'
import { Table } from './Table'
import { AddProduct } from './AddProduct'
import { Total } from './Total'

// import css from "./App.module.css";

export default class App1 extends React.Component {
  state = state
  handleDeleteItem = index => {
    const products = this.state.products.filter(product => product.id !== index)
    this.setState({ products })
  }
  handleAddProduct = newProduct => {
    let { products } = this.state
    newProduct.id =
      products.length > 0 ? products[products.length - 1].id + 1 : 1
    products = [...products, newProduct]
    this.setState({ products, newProduct })
  }
  handleChangeCheckbox = id => {
    let { products } = this.state
    products = products.map(element => {
      if (element.id === id) {
        element.isChecked = !element.isChecked
      }
      return element
    })

    this.setState({ products })
  }

  render() {
    const { products } = this.state
    return (
      <>
        {products && (
          <Table
            products={products}
            handleDeleteItem={this.handleDeleteItem}
            handleChangeCheckbox={this.handleChangeCheckbox}
          />
        )}
        <Total products={products} />
        <AddProduct handleAddProduct={this.handleAddProduct} />
      </>
    )
  }
}
