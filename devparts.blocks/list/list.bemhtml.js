block('list')({
  tag: 'ul',
  mix: { block: 'mmenu', elem: 'list' },
  content: (node, ctx) => {
    return ctx.content.map(function(item) {
      return {
        elem: 'item',
        tag: 'li',
        content: item
      };
    });
  }
});

