import React from 'react'
import PropTypes from 'prop-types'

export function Buttons({
  currentQuestion,
  setCurrentQuestion,
  checkMode,
  setCheckMode,
  lastQuestionIndex,
}) {
  let first = currentQuestion === 0
  let last = currentQuestion === lastQuestionIndex
  return (
    <>
      {!first && (
        <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
          Предыдущий вопрос
        </button>
      )}
      {!last && (
        <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
          Следующий вопрос
        </button>
      )}
      {last && (
        <button onClick={() => setCheckMode(!checkMode)}>сдать тест</button>
      )}
    </>
  )
}

Buttons.propTypes = {
  currentQuestion: PropTypes.number,
  setCurrentQuestion: PropTypes.func,
  checkMode: PropTypes.bool,
  setCheckMode: PropTypes.func,
  lastQuestionIndex: PropTypes.number,
}
