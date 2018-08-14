module.exports = {
    block: 'page',
    title: 'Аспирантура УФИЦ РАН',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
          block: 'header',
          mods: { theme: 'bashedu'},
          content: [
            {
              block: 'header',
              elem: 'logo',
            },
            {
              elem: 'text-logo',
              content: [
                'Абитуриент-2018'
              ]
            },
            {
              block: 'sticker',
              mix: { block: 'header', elem: 'sticker' },
              content: [
                {
                  elem: 'offic-name',
                  elemMods: { theme: 'bashedu'},
                  content:  'Официальный сайт БашГУ'
                },
                {
                  block: 'sticker',
                  elem: 'phone',
                  js: true,
                  content: [
                    {
                      block: 'image',
                      mix: { block: 'sticker', elem: 'phone-icon' },
                      url: '../../static/img/phone_25x25.png',
                      js: true,
                      width: 25,
                      height: 25
                    },
                    {
                      elem: 'phone-text',
                      tag: 'span',
                      content: [ 'Телефоны приемной комиссии' ]
                    }
                  ]
                },
                {
                  block: 'search',
                  mix: { block: 'sticker', elem: 'search' },
                  content: [
                    {
                      block: 'input',
                      mix: { block: 'search', elem: 'input' },
                      placeholder: 'найти...'
                    },
                    {
                      block: 'button',
                      mix: { block: 'search', elem: 'submit' }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'mainmenu'
        },
        {
          block: 'slider'
        },
        {
          block: 'newsblock'
        },
        {
          block: 'main-wrapper'
        },
        {
          block: 'footer-wrapper'
        }
    ]
};
