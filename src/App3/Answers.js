import React from 'react'
import PropTypes from 'prop-types'
export function Answers({ answers, userAnswer, handleInputChange, id }) {
  return (
    <form>
      <fieldset>
        {answers.map((answer, index) => (
          <label key={index}>
            <input
              type="radio"
              name="radio1"
              value={index}
              checked={+userAnswer === index}
              onChange={e => handleInputChange(e, id)}
            />
            {answer}
          </label>
        ))}
      </fieldset>
    </form>
  )
}

Answers.propTypes = {
  id: PropTypes.number,
  answers: PropTypes.array,
  userAnswer: PropTypes.string,
  handleInputChange: PropTypes.func,
}
