import createDataContext from './createDataContext';

const barcodeReducer = (state, action) => {
  switch(action.type){
    case 'start_barcode':
      return {...state, barcodevisible: true};
    case 'stop_barcode':
      return {...state, barcodevisible: false};
    default:
      return state;
  }
};


const startbarcode = dispatch => () => {
  console.log("startbarcode");
  dispatch({type:'start_barcode'});
};
const stopbarcode= dispatch => () => {
  dispatch({type:'stop_barcode'});
};

export const {Provider, Context} = createDataContext(
  barcodeReducer,
  {startbarcode, stopbarcode},
  {barcodevisible: false}
);