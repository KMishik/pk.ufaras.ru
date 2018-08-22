modules.define('mmenu__menu', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('mmenu', 'menu', {
    onSetMod: {
        js: {
            inited: function() {
              this.subMenu = this._elem('submenu');
              this.subMenu.hasMod('show') && this.subMenu.delMod('active');
              this._domEvents().on('mouseleave', this._onMouseLeave)
            }
        }
    },

    _onMouseEnter: function(e) {
      e.preventDefault();
      this.subMenu.setMod('active');
    },

    _onMouseLeave: function(e) {
      e.preventDefault();
      this.subMenu.delMod('active');
    }
},
{
  lazyInit: true,
  onInit: function() {
    this._domEvents().on('mouseenter', this.prototype._onMouseEnter);
  }
}));

});
