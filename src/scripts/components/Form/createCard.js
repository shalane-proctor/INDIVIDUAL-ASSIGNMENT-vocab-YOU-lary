import clearDom from '../Utility/clearDom';
import renderToDom from '../Utility/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${
  obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'
}" class="mb-4">
      <div class="form-group">
        <label for="title">Word/Acronym/Phrase</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Word, Acronym, or Phrase" value="${
  obj.title || ''
}" required>
      </div>
      <div class="form-group">
        <label for="description">Description/Definition</label>
        <textarea class="form-control" placeholder="Card Description or Definition" id="description" style="height: 100px">${
  obj.description || ''
}</textarea>
      </div>
      </div>
      <div class="form-group" id="select-language">
      <select id="language" class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="CSS">CSS</option>
  <option value="HTML">HTML</option>
  <option value="Javascript">Javascript</option>
</select>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="saved" ${
  obj.saved ? 'checked' : ''
}>
        <label class="form-check-label" for="saved">On Bookmark?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Card
      </button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addCardForm;
