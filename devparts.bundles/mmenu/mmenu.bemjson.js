module.exports = {
    block: 'page',
    title: 'Page mmenu',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'mmenu.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'mmenu.min.js' }],
    mods: { theme: 'islands' },
    content: [
      {
        block: 'mmenu',
        mods: { theme: 'header' }
      }
    ]
};
