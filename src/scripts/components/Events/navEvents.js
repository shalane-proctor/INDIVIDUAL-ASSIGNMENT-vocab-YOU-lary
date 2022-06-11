import { getVocabCards } from '../../../api/vocabData';
import addCardForm from '../Form/createCard';
import cardsOnDom from '../Page Elements/cardsOnDom';
// import clearDom from '../Utility/clearDom';

const navigationEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCardForm();
    }
    document.querySelector('#navBarLogo').addEventListener('click', () => {
      getVocabCards(uid).then((authorsArray) => {
        if (authorsArray) {
          cardsOnDom(authorsArray, uid);
        }
      });
    });
  });
};

export default navigationEvents;
