import { connect } from 'react-redux';
import React, {Component} from 'react';
import StartPage from '../pages/start/start-page';
import ProjectsPage from '../pages/projects/projects-page';
import './main.scss';

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
      <div className='main'>
        <StartPage />
        <ProjectsPage />
      </div>
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
