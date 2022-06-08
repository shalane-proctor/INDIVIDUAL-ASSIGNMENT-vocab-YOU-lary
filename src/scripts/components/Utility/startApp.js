import domBuilder from '../Page Elements/domBuilder';
import mainDom from '../Page Elements/mainPage';
import navBar from '../Page Elements/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  mainDom();
};

startApp();

export default startApp;
