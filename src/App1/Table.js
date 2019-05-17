import React from 'react'
import PropTypes from 'prop-types'
export function Table({ products, handleDeleteItem, handleChangeCheckbox }) {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>amount</th>
          <th>price</th>
          <th>total cost</th>
          <th>checkbox</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.price}</td>
            <td>{product.amount * product.price}</td>
            <td>
              <input
                type="checkbox"
                name="isChecked"
                checked={product.isChecked}
                onChange={handleChangeCheckbox.bind(null, product.id)}
              />
            </td>
            <td>
              <button onClick={handleDeleteItem.bind(null, product.id)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  products: PropTypes.array.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleChangeCheckbox: PropTypes.func.isRequired,
}
