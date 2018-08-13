block('sticker').elem('phone')({
  wrap: (node, ctx) => {
    debugger;
    return [
      {
        block: 'link',
        mix: { block: 'sticker', elem: 'phone-wrapper'},
        url: 'http://bem.info',
        target: '_blank',
        content: ctx
      },
    ];
  },
});
