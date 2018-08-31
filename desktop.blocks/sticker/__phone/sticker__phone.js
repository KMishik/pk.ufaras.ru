modules.define('sticker__phone', ['i-bem-dom', 'sticker__phone-icon'], function(provide, bemDom, Icon) {

provide(bemDom.declElem('sticker', 'phone', {
  onSetMod: {
    js: {
      inited: function() {
        this.iconElem = this._elem(Icon);
        this.iconElem.delMod('active');
        this._domEvents().on('mouseenter',this._onMouseEnter);
        this._domEvents().on('mouseleave',this._onMouseLeave);
      }
    }
  },

  _onMouseEnter: function(e) {
    e.preventDefault();
    this.iconElem.setMod('active');
  },

  _onMouseLeave: function(e) {
    e.preventDefault();
    this.iconElem.delMod('active');

  }
},
{
  lazyInit: false,
  onInit: function() {}
}));

});
