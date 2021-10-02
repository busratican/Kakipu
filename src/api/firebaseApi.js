import AsyncStorage from '@react-native-async-storage/async-storage';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { firebase } from '@firebase/app';

require('firebase/auth')

   const firebaseConfig = {
    apiKey: "AIzaSyBtW9PR7trEBW0U41sjjrbYF9Z0S0dWVcM",
    authDomain: "kakipu2021.firebaseapp.com",
    projectId: "kakipu2021",
    storageBucket: "kakipu2021.appspot.com",
    messagingSenderId: "562751726223",
    appId: "1:562751726223:web:47569c30e7f735ddf986fa",
    measurementId: "G-211X39SPQ3"
  };
   
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }


  export const signUpEmailAndPassword = ({email, password}) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      // Signed in 
      var user = userCredential.user;
      var uid = user.uid;
      await AsyncStorage.setItem('uid', uid);
    })
    .catch((error) => {
      //var errorCode = error.code;
      var errorMessage = error.message;
      return errorMessage;
    });
  };


  export const signInWithEmailAndPassword = ({email, password}) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async(userCredential) => {
      // Signed in
      var user = userCredential.user;
      var uid = user.uid;
      await AsyncStorage.setItem('uid', uid);
    })
    .catch((error) => {
      //var errorCode = error.code;
      var errorMessage = error.message;
      return errorMessage;
    });
  }

  export const checkUserAuthStateChanged = (() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        return uid;
      } else {
        return null;
      }
    });
  });

  // export const writeData = ({userId,username, id, description, photos}) => {
  //   try{
  //     firebase.database().ref('users/' + userId).set({
  //     username,
  //     posts: {
  //         id,
  //         description,
  //         photos
  //     }
  //   });
  //   }catch(error){
  //     var errorMessage = error.message;
  //     return errorMessage;
  //   }
   
  // }