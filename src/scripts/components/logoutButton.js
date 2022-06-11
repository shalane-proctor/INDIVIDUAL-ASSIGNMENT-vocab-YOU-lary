import 'firebase/auth';
import firebase from 'firebase/app';
import clearDom from './Utility/clearDom';
import renderToDom from './Utility/renderToDom';

const signMeOut = () => {
  clearDom();
  document.querySelector('#navigation').innerHTML = '';
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="logout-button" class="btn btn-sm btn-outline-secondary logout" type="button">Logout</button>';
  document.querySelector('#logout-button').addEventListener('click', signMeOut);
  renderToDom('#logout-button', domString);
};

export default logoutButton;

// const logoutButton = () => {
//   const domString = '<button class="btn btn-sm btn-outline-secondary logout" type="button">Logout</button>';
//   renderToDom('#logout-button', domString);
// };

// export default logoutButton;
