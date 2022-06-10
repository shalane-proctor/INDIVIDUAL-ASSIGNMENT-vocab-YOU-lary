import getVocabCards from '../../../api/vocabData';
import navigationEvents from '../Events/navEvents';
import logoutButton from '../logoutButton';
import cardsOnDom from '../Page Elements/cardsOnDom';
import domBuilder from '../Page Elements/domBuilder';
// import mainDom from '../Page Elements/mainPage';
import navBar from '../Page Elements/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents();
  // mainDom();
  getVocabCards().then((vocabArray) => cardsOnDom(vocabArray));
};

startApp();

export default startApp;
