block('mmenu')({
  tag: 'ul',
  content: () => {
    //let menuItems = require("../../devparts.blocks/mmenu/mmenu.items.json");
    //console.log(JSON.stringify(menuItems, null, 2));
    return [
      {
        elem: 'menu',
        js: true,
        tag: 'li',
        content: [
          {
            elem: 'item',
            tag: 'p',
            content: 'ПРИЁМНАЯ КОМИССИЯ',
          },
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
            content: [
              {
                block: 'list',
                content: [
                  'Личный кабинет аббитуриента',
                  'Список поступающих, рейтинги',
                  'Приветственное слово ректора',
                  'График приёма аббитуриентом и их родителей',
                  'Общежития'
                ]
              },
              {
                block: 'list',
                content: [
                  {
                    elem: 'title',
                    content: 'ОБЩАЯ ИНФОРМАЦИЯ'
                  },
                  'Приёмная комиссия',
                  'Часто задаваемые вопросы',
                  'Нормативные документы приёмной комиссии БашГУ',
                  'Телефоны и адреса приёмных комиссий'
                ]
              },
              {
                block: 'list',
                content: [
                  {
                    elem: 'title',
                    content: 'МЕДИА'
                  },
                  'Новости приёмной комиссии'
                ]
              }
            ]
          }
        ]
      },
      {
        elem: 'menu',
        js: true,
        tag: 'li',
        content: [
          {
            elem: 'item',
            tag: 'p',
            content: 'БАКАЛАВРИАТ И СПЕЦИАЛИТЕТ',
          },
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
          }
        ]
      },
      {
        elem: 'menu',
        js: true,
        tag: 'li',
        content: [
          {
            elem: 'item',
            tag: 'p',
            content: 'МАГИСТРАТУРА',
          },
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
          }
        ]
      },
      {
        elem: 'menu',
        tag: 'li',
        js: true,
        content: [
          {
            elem: 'item',
            tag: 'p',
            content: 'АСПИРАНТУРА',
          },
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
          }
        ]
      },
      {
        elem: 'menu',
        tag: 'li',
        js: true,
        content: [
          {
            elem: 'item',
            tag: 'p',
            content: 'КОЛЛЕДЖ БАШГУ',
          },
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
          }
        ]
      },
    ]
  }
});
