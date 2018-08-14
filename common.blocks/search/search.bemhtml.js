block('search')({
  tag: 'form'
});
block('search').elem('input')({
  tag: 'input',
  attrs: {
    type: 'text',
    name: 'regexp',
    placeholder: 'Найти...'
  }
});
