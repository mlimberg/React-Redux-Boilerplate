import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(increase(1))
    },
    decrease: () => {
      dispatch(decrease(1))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.handleCount
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
