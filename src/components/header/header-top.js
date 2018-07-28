import React, {Component} from 'react';
import { connect } from 'react-redux';
import { openDialog } from '../../actions';

class HeaderTop extends Component {

  changeHandler = () => {
    this.props.openDialog(true);
  }

  render() {
    return (
      <div className='header__top container'>
        <img src='img/logo-stil-400x200.png'/>
        <h2>Только качественные решения</h2>
        <div className='header__top-info'>
          <p>+375 (29) 763-97-40</p>
          <p>+375 (29) 763-97-40</p>
          <button onClick={this.changeHandler}>Open modal</button>
        </div>
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
    openDialog: (name) => { dispatch(openDialog(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
