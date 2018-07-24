import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openDialog, closeDialog } from '../../actions';

class HeaderNav extends Component {


  changeHandler = () => {
    this.props.openDialog(true);
  }


  render() {
    return (
      <div className='header__nav'>
        <nav className='container'>
          <button onClick={this.changeHandler}>Open modal</button>
          <button>Главная</button>
          <button>Каталог</button>
          <button>Проекты</button>
          <button>Кредит</button>
          <button>Цены</button>
          <button>О нас</button>
          <button>Контакты</button>
        </nav>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    name: state.isOpen,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openDialog: (name) => { dispatch(openDialog(name)) },
    closeDialog: (name) => { dispatch(closeDialog(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
