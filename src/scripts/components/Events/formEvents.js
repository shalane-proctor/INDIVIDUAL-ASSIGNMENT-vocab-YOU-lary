import { createCard, updateCard } from '../../../api/vocabData';
import cardsOnDom from '../Page Elements/cardsOnDom';

const currentDateTime = new Date().toLocaleString();

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        saved: document.querySelector('#saved').checked,
        language: document.querySelector('#language').value,
        time: currentDateTime,
        uid
      };
      createCard(cardObject).then((cardArray) => cardsOnDom(cardArray));
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        saved: document.querySelector('#saved').checked,
        language: document.querySelector('#language').value,
        time: currentDateTime,
        firebaseKey
      };
      updateCard(cardObject).then(cardsOnDom);
    }
  });
};

export default formEvents;
