block('input')({
    replace: (node, ctx) => {
      return [
        {
          elem: 'input',
          tag: 'input',
          attrs: { type: 'text', placeholder: 'найти...' }
        }
      ]
    }
  }
);
