import React from "react"

const QuestionPreview = props => {
  return (
    <>
      <section className="votes-answers">
        <div className="total-votes">
          <h2>{props.votes}</h2>
          <p>votes</p>
        </div>
        <div className="total-answers">
          <h2>0</h2>
          <p>answers</p>
        </div>
        <div>
          <p>
            <span>???</span> views
          </p>
        </div>
      </section>
      <section className="question-and-answer">
        <a href="#">{props.questionTitle}</a>
        <p>{props.questionContent}</p>
      </section>
    </>
  )
}

export default QuestionPreview
