module.exports = {
    block: 'page',
    title: 'Page menu',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'menu.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'menu.min.js' }],
    mods: { theme: 'islands' },
    content: [
      {
        block: 'nav',
        content: [
          {
            block: 'list',
            mix: { block: 'nav', elem: 'header' },
            content: [
              {
                elem: 'link',
                name: 'ПРИЁМНАЯ КОМИССИЯ',
                submenu: true,
                content: '',
              },
              {
                elem: 'link',
                name: 'БАКАЛАВРИАТ И СПЕЦИАЛИТЕТ',
                submenu: true,
                content: '',
              },
              {
                elem: 'link',
                name: 'МАГИСТРАТУРА',
                submenu: true,
                content: '',
              },
              {
                elem: 'link',
                name: 'АСПИРАНТУРА',
                submenu: true,
                content: '',
              },
              {
                elem: 'link',
                name: 'КОЛЛЕДЖ БАШГУ',
                submenu: true,
                content: '',
              },
            ]
          }
        ]
      }
    ]
};
