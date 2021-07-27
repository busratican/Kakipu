import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import { signInWithEmailAndPassword, signUpEmailAndPassword } from '../api/firebaseApi';

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return  {...state, errorMessage: ''};  
        default:
            return state;
    }
};

const tryLocalSignIn = dispatch => async(navigation)=>{
    const token = await AsyncStorage.getItem('uid');
    console.log(token)
    if(token){
        dispatch({type: 'signin', payload: token});
        navigation.navigate('HomeScreen');
    }else{
        navigation.navigate('FirstOpenScreen');
    }
};


const clearErrorMessage = dispatch => () =>{
    dispatch({type:'clear_error_message'});  
};

const signup = (dispatch) => async ({email, password, navigation}) => {
    try{
        await signUpEmailAndPassword({email,password});
        //AsyncStorage process
        const uid = await AsyncStorage.getItem('uid');
        dispatch({type: 'signin', payload: uid});
        //navigate main flow
        navigation.navigate('HomeScreen');
    }catch(err){
        console.log(err.message);
        dispatch({type: 'add_error', payload:'Something went wrong with sign up.'});
    }
};

const signin = (dispatch) => async ({email, password, navigation}) => {
    try{
        signInWithEmailAndPassword({email,password});
        //AsyncStorage process
        const uid = await AsyncStorage.getItem('uid');
        dispatch({type: 'signin', payload: uid});
        //navigate main flow
        navigation.navigate('HomeScreen');
    }catch(err){
        console.log(err.message);
        dispatch({type: 'add_error', payload:'Something went wrong with sign up.'});
    }
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, clearErrorMessage, tryLocalSignIn},
    {token: null, errorMessage: ''}
);