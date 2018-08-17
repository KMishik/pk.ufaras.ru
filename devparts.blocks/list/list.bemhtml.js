block('list')({
  tag: 'ul',
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

