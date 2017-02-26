import React, { Component } from 'react';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

export class Quiz extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { questions } = this.props;
    console.log(questions);
    const quizQuestions = questions.map(obj => {
      return (
        <QuizQuestion title={obj.title}
                      answers={obj.answers}
                      key={obj.id}/>
      )
    })

    console.log(quizQuestions);
    return(
      <div>
        {quizQuestions}
        <button className='submit-btn'>Submit</button>
      </div>
    )
  }
}

export default QuizContainer(Quiz);
