import React, { useState } from 'react'
import { Buttons } from './Buttons'
import { ShowResult } from './ShowResult'
import { initialQuestions } from './initialQuestions'
export default function App3() {
  let [questions, setQuestions] = useState(initialQuestions)
  const [checkMode, setCheckMode] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)

  const handleInputChange = (e, id) => {
    const value = e.target.value
    questions = questions.map(question => {
      if (question.id === id) question.userAnswer = value
      return question
    })
    console.log(value, questions)

    setQuestions(questions)
  }

  const { id, question, answers, userAnswer } = questions[currentQuestion]
  return (
    <>
      {checkMode || (
        <>
          <p>{question}</p>
          <Answers
            id={id}
            answers={answers}
            userAnswer={userAnswer}
            handleInputChange={handleInputChange}
          />
          <Buttons
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            checkMode={checkMode}
            setCheckMode={setCheckMode}
            lastQuestionIndex={questions.length - 1}
          />
        </>
      )}
      {checkMode && <ShowResult questions={questions} />}
      {checkMode && <input type="button" value="Пройти еще раз" />}
    </>
  )
}

function Answers({ answers, userAnswer, handleInputChange, id }) {
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
