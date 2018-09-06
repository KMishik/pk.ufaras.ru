block('list')({
  tag: 'ul',
  content: (node, ctx) => {
    let cnt = ctx.content;
    typeof(cnt) === 'undefined' ? cnt = [] : typeof(cnt) === 'string' ? cnt = new Array(cnt) : true
    return cnt.map(function(item) {
      return {
        elem: 'item',
        tag: 'li',
        content: item
      };
    });
  }
},
elem('name')({
  replace: (node, ctx) => {
    let isLink = false;
    typeof(ctx.link) !== 'undefined' && typeof(ctx.link) === 'object' && typeof(ctx.link.url) === 'string' ? isLink = true : isLink = false;
    if (isLink) {
      return {
        elem: 'caption',
        tag: 'a',
        attrs: { href: ctx.link.url },
        content: {
          tag: 'span',
          content: ctx.content,
        }
      }
    }
    else {
      return {
        elem: 'caption',
        tag: 'p',
        content: ctx.content
      }
    }
  }
})
);
