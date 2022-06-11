import { getVocabCards } from '../../../api/vocabData';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvents';
import navigationEvents from '../Events/navEvents';
import logoutButton from '../logoutButton';
import cardsOnDom from '../Page Elements/cardsOnDom';
import domBuilder from '../Page Elements/domBuilder';
// import mainDom from '../Page Elements/mainPage';
import navBar from '../Page Elements/navBar';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  navigationEvents();
  logoutButton();
  // mainDom();
  getVocabCards().then((vocabArray) => cardsOnDom(vocabArray));
};

startApp();

export default startApp;
