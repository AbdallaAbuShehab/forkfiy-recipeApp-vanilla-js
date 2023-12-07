class SearchView {
  _parentElemnt = document.querySelector('.search');

  addHandlerSearch(handler) {
    this._parentElemnt.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentElemnt.querySelector('.search__field').value = '';
  }

  getQuery() {
    const query = this._parentElemnt.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
}
export default new SearchView();
