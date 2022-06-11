import { getVocabCards } from '../../../api/vocabData';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvents';
import navigationEvents from '../Events/navEvents';
import logoutButton from '../logoutButton';
import cardsOnDom from '../Page Elements/cardsOnDom';
import domBuilder from '../Page Elements/domBuilder';
// import mainDom from '../Page Elements/mainPage';
import navBar from '../Page Elements/navBar';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  navigationEvents(user.uid);
  logoutButton();
  getVocabCards(user.uid).then((vocabArray) => cardsOnDom(vocabArray));
};

export default startApp;
