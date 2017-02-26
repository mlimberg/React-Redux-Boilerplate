import React, { Component } from 'react';

class Answers extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      score: 0
    }
  }

  

  render() {
    const { answer } = this.state;

    const answers = this.props.answers.map(answer => {
      let { title, score } = answer
      return(
        <label className='mult-choice-answer' key={score}>
          <input type='radio'
                 className='radio-btn'
                 value={title}
                 onChange={(e) => this.setState({ answer: e.target.value })}
                 checked={this.state.answer === title}/>
          {title}
        </label>
      )
    })

    return (
      <div>
        {answers}
      </div>
    )
  }
}

export default Answers
