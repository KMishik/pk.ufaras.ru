modules.define('sticker__phone', ['i-bem-dom', 'image'], function(provide, bemDom, Image) {

provide(bemDom.declElem('sticker', 'phone', {
  onSetMod: {
    js: {
      inited: function() {
        let img = this.findChildBlock(Image);
        console.log('sticker__phone elem inited');
      }
    }
  },

  _onMouseEnter: function(e) {
    e.preventDefault();
    console.log(e);
  }
},
{
  lazyInit: true,
  onInit: function() {
    this._domEvents().on('mouseenter',this.prototype._onMouseEnter);
  }
}));

});
