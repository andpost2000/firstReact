import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Header__top extends Component {
  
  static propTypes = {
    
  };


  state = {
  }

  render() {
    return (
      <div className='header__top container'>
        <img src='img/logo-stil-400x200.png'/>
        <h2>Только качественные решения</h2>
        <div className='header__top-info'>
          <p>+375 (29) 763-97-40</p>
          <p>+375 (29) 763-97-40</p>
        </div>
      </div>
    )
  }
}

export default Header__top
