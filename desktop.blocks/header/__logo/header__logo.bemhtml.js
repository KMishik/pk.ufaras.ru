block('header').elem('logo')({
  wrap: (node, ctx) => {
    return [
      {
        block: 'link',
        mix: { block: 'header', elem: 'logo-wrapper'},
        url: 'http://bem.info',
        target: '_blank',
        content: ctx
      },
    ];
  },
});
