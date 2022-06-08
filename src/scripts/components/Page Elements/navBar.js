import renderToDom from '../Utility/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab-YOU-Lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="btn btn-sm btn-outline-secondary" type="button">Create Card!</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-sm btn-outline-secondary" type="button">Logout</button>
        </li>
      </ul>
      <span class="navbar-text">
        Vocab cards for studying JS, CSS, & HTML.
      </span>
    </div>
  </div>
</nav>`;
  renderToDom('#navigation', domString);
};

export default navBar;
