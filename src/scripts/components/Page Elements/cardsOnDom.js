import clearDom from '../Utility/clearDom';
import renderToDom from '../Utility/renderToDom';

const noCards = () => {
  document.querySelector('#add-card').innerHTML = '<h1>No Cards</h1>';
};

const cardsOnDom = (array) => {
  clearDom();
  if (array.length) {
    const btnString = `<div id="buttonContainer">
  <button id=" type="button" class="btn btn-dark">HTML</button>
  <button type="button" class="btn btn-dark">CSS</button>
  <button type="button" class="btn btn-dark">Javascript</button>
  <button type="button" class="btn btn-dark">A-Z</button>
  <button type="button" class="btn btn-dark">All Cards</button>
  </div>`;
    renderToDom('#filter-btns', btnString);
    let domstring = '';
    array.forEach((item) => {
      domstring += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <p class="card-text">${item.language}</p>
        <button id="edit-card-btn--${item.firebaseKey}" type="button" class="btn btn-secondary">Edit</button>
        <button id="card-bookmark-btn--${item.firebaseKey}" type="button" class="btn btn-secondary">Save</button>
        <button id="delete-book-btn--${item.firebaseKey}" type="button" class="btn btn-secondary">Delete</button>
        <p class="card-text"><small class="text-muted">Last updated ${item.time}</small></p>
      </div>
    </div>`;
    });
    renderToDom('#add-card', domstring);
  } else {
    noCards();
  }
};

export default cardsOnDom;
