block('list').elem('link')({
  tag: 'a',
  attrs: (node,ctx) => ({ href: ctx.url || '/' }),
  content: (node,ctx) => ({ tag: 'span', content: ctx.name || '' }) ,
  /*content: (node,ctx) => {
    console.log(ctx);
  }*/
});
