import { connect } from 'react-redux';
import React, { Component } from 'react';
import Header from '../header/Header';
import StartPage from '../pages/start/start-page';
import ProjectsPage from '../pages/projects/projects-page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import NotFoundPage from '../pages/not-found/not-found';

class Main extends Component {
  /*
  constructor(props){
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    
  }
*/
  /*
  changeHandler(){
    console.log('click clack');
    this.props.openDialog('ДРУГОЕ НАЗВАНИЕ');
  }
*/

  render() {
    console.log(this.props.isOpen);
    return (
      <Router>
        <div>
          <Header />
          <div className='main'>
            <Switch>
              <Route exact path='/' component={StartPage} />
              <Route path='/projects' component={ProjectsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.isOpen,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     openDialog: (name) => { dispatch(openDialog(name)) },
//     closeDialog: (name) => { dispatch(closeDialog(name)) }
//   }
// }



export default connect(mapStateToProps)(Main);
          // export default Main
