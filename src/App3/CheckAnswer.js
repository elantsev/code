import React from 'react'
import PropTypes from 'prop-types'
export function CheckAnswer({ userAnswer, rightAnswer, answers }) {
  return (
    <p
      style={{
        color: userAnswer === rightAnswer ? 'green' : 'red',
      }}
    >
      {userAnswer === undefined
        ? 'нет ответа'
        : userAnswer === rightAnswer
        ? `ваш ответ ${answers[userAnswer]}, правильно`
        : `ваш ответ ${answers[userAnswer]}, не правильно, правильный ответ ${
            answers[rightAnswer]
          }`}
    </p>
  )
}

CheckAnswer.propTypes = {
  answers: PropTypes.array,
  rightAnswer: PropTypes.string,
  userAnswer: PropTypes.string,
}
