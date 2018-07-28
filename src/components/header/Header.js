import React, { Component } from 'react';

import HeaderTop from './header-top';
import './header.scss';
import HeaderNav from './header-nav';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <HeaderTop />
        <HeaderNav />
      </div>
    )
  }
}

export default Header
