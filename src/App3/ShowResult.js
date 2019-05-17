import React from 'react'
import { CheckAnswer } from './CheckAnswer'
import { PropTypes } from 'prop-types'
export function ShowResult({ questions }) {
  return (
    <ul>
      {questions.map(({ id, question, answers, rightAnswer, userAnswer }) => (
        <li key={id}>
          <p>{question}</p>
          <CheckAnswer
            userAnswer={userAnswer}
            rightAnswer={rightAnswer}
            answers={answers}
          />
        </li>
      ))}
    </ul>
  )
}

ShowResult.propTypes = {
  questions: PropTypes.array,
}
