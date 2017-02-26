import React, { Component } from 'react';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';
import Answers from '../Answers/Answers';

export class QuizQuestion extends Component {

  render() {
    const { answers, title } = this.props;

    return(
      <div>
        <h3>{title}</h3>
        <form>
          <Answers answers={answers} />
        </form>
      </div>
    )
  }
}

export default QuizContainer(QuizQuestion);
