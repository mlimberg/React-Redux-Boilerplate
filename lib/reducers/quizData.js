const quizData = (state={}, action) => {
  switch(action.type) {
    case 'STORE_DATA':
      state = action.data;
      return state;
    default:
      return state;
  }
}

export default quizData;
