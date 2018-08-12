module.exports = {
    // essential
    fileProvider: require('enb/techs/file-provider'),
    fileMerge: require('enb/techs/file-merge'),

    // optimization
    borschik: require('enb-borschik/techs/borschik'),

    // css
    postcss: require('enb-postcss/techs/enb-postcss'),
    postcssPlugins: [
        require('postcss-import')(),
        require('postcss-each'),
        require('postcss-for'),
        require('postcss-simple-vars')(),
        require('postcss-calc')(),
        require('postcss-nested'),
        require('rebem-css'),
        require('postcss-url')({ url: 'rebase' }),
        require('autoprefixer')(),
        require('postcss-reporter')()
    ],

    // js
    browserJs: require('enb-js/techs/browser-js'),

    // bemtree
    // bemtree: require('enb-bemxjst/techs/bemtree'),

    // bemhtml
    bemhtml: require('enb-bemxjst/techs/bemhtml'),
    bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')
};
