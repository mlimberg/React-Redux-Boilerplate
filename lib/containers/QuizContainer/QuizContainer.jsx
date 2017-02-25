import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actions, dispatch)

const mapStateToProps = (state) => ({
  quizData: state.quizData,
  questions: state.quizData.questions || []
})

export default connect(mapStateToProps, mapDispatchToProps);
