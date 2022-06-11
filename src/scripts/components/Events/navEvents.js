import addCardForm from '../Form/createCard';
// import clearDom from '../Utility/clearDom';

const navigationEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCardForm();
    }
    // if (e.target.id.includes('navBarLogo')) {
    //   clearDom();
    // }
  });
};

export default navigationEvents;
