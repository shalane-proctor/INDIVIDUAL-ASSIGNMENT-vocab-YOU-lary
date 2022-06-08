import domBuilder from '../Page Elements/domBuilder';
import navBar from '../Page Elements/navBar';

const startApp = () => {
  domBuilder();
  navBar();
};

startApp();

export default startApp;
