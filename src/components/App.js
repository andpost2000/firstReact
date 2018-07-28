import React, { Component } from 'react';
import Dialog from './Dialog';

import './index.scss';
import Main from './main/main';

class App extends Component {

  render() {

    // console.log('==== store'),
    // console.log(this.props.store)
    return (
      <div className='app'>
        <Main />
        <Dialog />
        <div id='modal-root' />
      </div>
    )
  }
}

export default App
