import React from 'react'
import PropTypes from 'prop-types'
export function Total({ products }) {
  return (
    <p>
      Общая сумма:
      {products.reduce((accumulator, currentValue) => {
        if (currentValue.isChecked)
          return accumulator + currentValue.price * currentValue.amount
        return accumulator
      }, 0)}
    </p>
  )
}

Total.propTypes = {
  products: PropTypes.array,
}
