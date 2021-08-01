import createDataContext from './createDataContext';

const dialogReducer = (state, action) => {
  switch(action.type){
  
    case 'start_dialog':
      return {...state, dialogvisible: true};
    case 'stop_dialog':
      return {...state, dialogvisible: false};
    default:
      return state;
  }
};


const startdialog = dispatch => () => {
  console.log("startdialog");
  dispatch({type:'start_dialog'});
};
const stopdialog = dispatch => () => {
  dispatch({type:'stop_dialog'});
};

export const {Provider, Context} = createDataContext(
  dialogReducer,
  {startdialog, stopdialog},
  {dialogvisible: false}
);