import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header__top from './header__top';
import HeaderNav from './header__nav';
import './header.scss';

class Header extends Component {
  
  static propTypes = {
    
  };


  state = {
  }

  render() {
    return (
      <div className='header'>
        <Header__top />
        <HeaderNav />
      </div>
    )
  }
}

export default Header
