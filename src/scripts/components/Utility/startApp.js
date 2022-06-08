import getVocabCards from '../../../api/vocabData';
import cardsOnDom from '../Page Elements/cardsOnDom';
import domBuilder from '../Page Elements/domBuilder';
// import mainDom from '../Page Elements/mainPage';
import navBar from '../Page Elements/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  // mainDom();
  getVocabCards().then((vocabArray) => cardsOnDom(vocabArray));
};

startApp();

export default startApp;
