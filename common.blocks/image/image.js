modules.define('image', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        console.log('sticker__phone-icon elem inited');
      }
    }
  }
},
{
  lazyInit : false,
}));

});
