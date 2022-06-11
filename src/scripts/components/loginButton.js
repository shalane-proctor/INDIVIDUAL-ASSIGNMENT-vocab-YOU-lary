import signIn from '../helpers/signIn';
import VocabYouLarry from '../../images/VocabYouLarry1.png';
import clearDom from './Utility/clearDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<button id="google-auth" class="btn btn-danger">Login</button>
  <div>
  <img src=${VocabYouLarry} alt="" width="600" height="500">
  </div>`;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
  clearDom();
};

export default loginButton;
