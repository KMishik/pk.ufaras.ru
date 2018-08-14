block('search')({
  tag: 'form'
});
block('search').elem('input')({
  tag: 'input',
  js: true,
  attrs: {
    type: 'text',
    name: 'regexp',
    placeholder: 'Найти...'
  }
});
