import View from './View.js';

class AddRecipeView extends View {
  _parentElemnt = document.querySelector('.upload');
  _message = 'Recipe was succsesfully uploaded ;)';

  _window = document.querySelector('.add-recipe-window');
  _openRecipeBtn = document.querySelector('.nav__btn--add-recipe');
  _closeRecipeBtn = document.querySelector('.btn--close-modal');
  _overlay = document.querySelector('.overlay');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  _toggleWindw() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._openRecipeBtn.addEventListener('click', this._toggleWindw.bind(this));
  }
  _addHandlerCloseWindow() {
    this._closeRecipeBtn.addEventListener(
      'click',
      this._toggleWindw.bind(this)
    );
    this._overlay.addEventListener('click', this._toggleWindw.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElemnt.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const dataObj = Object.fromEntries(dataArr);

      handler(dataObj);
    });
  }
}

export default new AddRecipeView();
