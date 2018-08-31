block('list')({
  tag: 'ul',
  content: (node, ctx) => {
    if (typeof(ctx.content) === 'string') {
      ctx.content = new Array(ctx.content);
    }
    return ctx.content.map(function(item) {
      return {
        elem: 'item',
        tag: 'li',
        content: item
      };
    });
  }
});
