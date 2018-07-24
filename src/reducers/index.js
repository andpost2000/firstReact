// // import * as monolite from 'monolite';
// import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions';

// const myReducer = (state = 'CLOSE_DIALOG', action) => {
//   switch (action.type) {
//     case OPEN_DIALOG:
//       return true
//     case CLOSE_DIALOG:
//       return false
//     default:
//       return state;
//   }
// }
// export default myReducer;

const iState = {isOpen: false};

const routReducer= (state = iState, action)=>{
    switch(action.type){
        case 'OPEN':
        // .... 
        return {isOpen: action.payload};
        case 'CLOSE':
            return { isOpen: action.payload };
        default: 
        return state;
    }
}

export default routReducer;