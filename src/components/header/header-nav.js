import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderNav extends Component {
  render() {
    return (
      <div className='header__nav'>
        <nav className='container'>
          <NavLink exact to='/' className='header__link' activeClassName="active">Главная</NavLink>
          <NavLink to='/projects' className='header__link' activeClassName="active">Проекты</NavLink>
        </nav>
      </div>
    )
  }
}

export default HeaderNav