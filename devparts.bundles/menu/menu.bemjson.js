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
                tag: false,
                content: [
                  {
                    elem: 'name',
                    link: { url: '/' },
                    content: 'ПРИЁМНАЯ КОМИССИЯ',
                  },
                  {
                    block: 'submenu',
                    content: [
                      {
                        block: 'list',
                        content: [
                          '111111',
                          '222222',
                          '333333'
                        ]
                      },
                      {
                        block: 'list',
                        content: [
                          '111111',
                          '222222',
                          '333333'
                        ]
                      },
                      {
                        block: 'list',
                        content: [
                          '111111',
                          '222222',
                          '333333'
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'title',
                content: 'БАКАЛАВРИАТ И СПЕЦИАЛИТЕТ',
              },
              {
                elem: 'title',
                content: 'МАГИСТРАТУРА',
              },
              {
                elem: 'title',
                content: 'АСПИРАНТУРА',
              },
              {
                elem: 'title',
                content: 'КОЛЛЕДЖ БАШГУ',
              }
            ]
          }
        ]
      }
    ]
};
