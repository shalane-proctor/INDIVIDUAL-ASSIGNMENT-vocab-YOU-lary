import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from '../components/Utility/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.querySelector('#login-form-container').innerHTML = '';
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
