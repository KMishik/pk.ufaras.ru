modules.define('sticker', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
              console.log('Init block sticker');
            }
        }
    }
}));

});
