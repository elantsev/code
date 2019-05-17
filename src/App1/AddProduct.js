import React, { useState } from 'react'
import PropTypes from 'prop-types'
export function AddProduct({ handleAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    amount: '',
    price: '',
    isChecked: true,
  })
  const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)

  const handleChange = e => {
    const name = e.target.name
    let value = e.target.value

    if (
      (name === 'amount' || name === 'price') &&
      (isNumeric(value) || value === '')
    )
      value = +value
    if ((name === 'amount' || name === 'price') && !isNumeric(value)) return

    setNewProduct({ ...newProduct, [name]: value })
  }

  const validation = newProduct => {
    if (
      newProduct.name.trim() &&
      (newProduct.amount > 0 || newProduct.amount === 0) &&
      (newProduct.price > 0 || newProduct.price === 0)
    ) {
      return true
    }
    return false
  }
  const handleAddProductWrapper = () => {
    handleAddProduct.bind(null, newProduct)()
    setNewProduct({
      name: '',
      amount: '',
      price: '',
      isChecked: true,
    })
  }

  return (
    <div>
      <form className="addProduct">
        <fieldset>
          <legend>add product here</legend>
          <label htmlFor="GET-name">name</label>
          <input
            id="GET-name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="GET-amount">amount</label>
          <input
            id="GET-amount"
            name="amount"
            value={newProduct.amount}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="GET-price">price</label>
          <input
            id="GET-price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <br />
          {validation(newProduct) && (
            <input
              type="button"
              value="Save"
              onClick={handleAddProductWrapper}
            />
          )}
        </fieldset>
      </form>
    </div>
  )
}

AddProduct.propTypes = {
  handleAddProduct: PropTypes.func,
}
