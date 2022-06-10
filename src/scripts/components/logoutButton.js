import 'firebase/auth';
import renderToDom from './Utility/renderToDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-sm btn-outline-secondary logout" type="button">Logout</button>';
  renderToDom('#logout-button', domString);
};

export default logoutButton;
