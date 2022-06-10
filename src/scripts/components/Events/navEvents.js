import signOut from '../../helpers/signOut';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
