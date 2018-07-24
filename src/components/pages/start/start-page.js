import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Slider from './slider/slider';

class StartPage extends Component {
  
  static propTypes = {
    
  };


  state = {
  }

  render() {
    return (
      <div className='index-page'>
        <Slider />
      </div>
    )
  }
}

export default StartPage
