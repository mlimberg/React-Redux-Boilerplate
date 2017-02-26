import React from 'react';
import { Link } from 'react-router';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';

const Response = () => {
  return (
    <div className='response'>
      RESPONSE!
    </div>
  )
}

export default QuizContainer(Response);
