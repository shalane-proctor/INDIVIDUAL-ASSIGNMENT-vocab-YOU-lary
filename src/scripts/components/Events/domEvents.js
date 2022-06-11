import { createCard, deleteCard, getSingleCard } from '../../../api/vocabData';
import cardsOnDom from '../Page Elements/cardsOnDom';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-book-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then((cardsArray) => cardsOnDom(cardsArray));
      }
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => createCard(cardObj));
    }
  });
};

export default domEvents;
