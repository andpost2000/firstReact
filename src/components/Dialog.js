import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openDialog, closeDialog } from '../actions';
import * as ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import './dialog.scss';

class Dialog extends Component {

  static propTypes = {};


  changeHandler = () => {
    this.props.openDialog(false);
  }

  render() {

    if (!this.props.isOpen) {
      return (
        null
      )
    }

    return ReactDOM.createPortal(
      (
        <React.Fragment>
          <div className='dialog' onClick={this.changeHandler}>
            <div className='dialog__wrap'>
              <button onClick={this.changeHandler}>X</button>
              Dialog
          </div>
          </div>
        </React.Fragment>),
      document.getElementById('modal-root'));
  }
}



function mapStateToProps(state) {
  return {
    isOpen: state.isOpen,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openDialog: (name) => { dispatch(openDialog(name)) },
    closeDialog: (name) => { dispatch(closeDialog(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);