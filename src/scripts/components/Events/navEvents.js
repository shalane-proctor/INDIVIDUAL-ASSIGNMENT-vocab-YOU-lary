import addCardForm from '../Form/createCard';
// import signOut from '../../helpers/signOut';

const navigationEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCardForm();
    }
    // document.querySelector('#logout-button')
    //   .addEventListener('click', signOut);
  });
};

export default navigationEvents;
