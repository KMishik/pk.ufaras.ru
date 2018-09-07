block('list').elem('link')({
  tag: 'a',
  attrs: (node,ctx) => ({ href: ctx.url || '/' }),
  content: (node,ctx) => ({ tag: 'span', content: ctx.name || '' }) ,
  /*content: (node,ctx) => {
    console.log(ctx);
  }*/
});
block('list').elem('link').match((node,ctx) => ctx.submenu)({
  replace: (node,ctx) => ([
    {
      elem: 'link',
      elemMods: { drop: true },
      name: ctx.name,
    },
    {
      block: 'submenu',
      content: ctx.content,
    }
  ]),
});

