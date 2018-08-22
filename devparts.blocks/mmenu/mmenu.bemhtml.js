block('mmenu')({
  tag: 'ul',
  content: () => {
    //let menuItems = require("../../devparts.blocks/mmenu/mmenu.items.json");
    //console.log(JSON.stringify(menuItems, null, 2));
    return [
      {
        elem: 'menu',
        tag: 'li',
        content: [
          'ПРИЁМНАЯ КОМИССИЯ',
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
                  'Телефоны и фдреса приёмных комиссий'
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
        tag: 'li',
        content: [
          'БАКАЛАВРИАТ И СПЕЦИАЛИТЕТ',
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
          }
        ]
      },
      {
        elem: 'menu',
        tag: 'li',
        content: [
          'МАГИСТРАТУРА',
          {
            elem: 'submenu'
          }
        ]
      },
      {
        elem: 'menu',
        tag: 'li',
        content: [
          'АСПИРАНТУРА',
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
          }
        ]
      },
      {
        elem: 'menu',
        tag: 'li',
        content: [
          'КОЛЛЕДЖ БАШГУ',
          {
            elem: 'submenu',
            elemMods: { theme: 'mega' },
          }
        ]
      },
    ]
  }
});
