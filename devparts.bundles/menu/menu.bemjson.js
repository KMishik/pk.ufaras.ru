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
                elemMods: { drop: true },
              },
              'БАКАЛАВРИАТ И СПЕЦИАЛИТЕТ',
              'МАГИСТРАТУРА',
              'АСПИРАНТУРА',
              'КОЛЛЕДЖ БАШГУ',
            ]
          }
        ]
      }
    ]
};
