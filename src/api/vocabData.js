import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET
const getVocabCards = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// GET single
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE
const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getVocabCards().then((cardsArray) => resolve(cardsArray));
    })
    .catch((error) => reject(error));
});

// CREATE
const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/cards.json`, cardObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios
        .patch(`${dbUrl}/cards/${response.data.name}.json`, payload)
        .then(() => {
          getVocabCards(cardObj.uid).then(resolve);
        });
    })
    .catch((error) => reject(error));
});

// UPDATE
const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/cards/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getVocabCards(cardObj).then(resolve))
    .catch(reject);
});

// FILTER saved
const savedCards = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cards.json?orderBy="saved"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// FILTER Language
const cardLanguage = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cards.json?orderBy="language"&equalTo=${'language'}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getVocabCards,
  getSingleCard,
  createCard,
  deleteCard,
  updateCard,
  savedCards,
  cardLanguage
};
