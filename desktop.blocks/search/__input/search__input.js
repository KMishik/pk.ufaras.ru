modules.define('search__input', ['i-bem-dom'], function(provide, bemDom) {

  provide(bemDom.declElem('search', 'input', {
    onSetMod: {
      js: {
        inited: function() {}
      }
    },

    _onBlur: function(e) {
      e.preventDefault();
      this.domElem[0].value = '';
    }
  },
  {
    lazyInit: true,
    onInit: function() {
      this._domEvents().on('blur', this.prototype._onBlur);
    }
  }
  ));

});
