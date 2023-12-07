import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElemnt = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElemnt.addEventListener('click', function (e) {
      const click = e.target.closest('.btn--inline');
      if (!click) return;

      const goToPage = +click.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupBtnNext();
    }
    // last page
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupBtnPrevious();
    }

    // other pages
    if (currentPage < numPages) {
      return [
        this._generateMarkupBtnNext(),
        this._generateMarkupBtnPrevious(),
      ].join('');
    }
    // page 1, and there are NO other pages
    return '';
  }

  _generateMarkupBtnPrevious() {
    return `
    <button data-goto="${
      this._data.page - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page - 1}</span>
    </button>
    `;
  }
  _generateMarkupBtnNext() {
    return `
      <button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
    `;
  }
}

export default new PaginationView();
