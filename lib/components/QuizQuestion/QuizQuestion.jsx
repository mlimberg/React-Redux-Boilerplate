import React, { Component } from 'react';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';
import Answer from '../Answer/Answer';

export class QuizQuestion extends Component {

  render() {
    const quizAnswers = this.props.answers.map((answer, i) => {
      return(
        <Answer text={answer.title} key={i}/>
      )
    })

    return(
      <div>
        <h3>{this.props.title}</h3>
        {quizAnswers}
      </div>
    )
  }
}

export default QuizContainer(QuizQuestion);
