import renderToDom from '../Utility/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filter-btns"></div>
    <div id="add-card"></div>
    <div id="form-container"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
