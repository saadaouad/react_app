require('babel-polyfil');

module.exports = Object.assign({
    app: {
        title: 'Obytes website',
        head: {
            titleTemplate: 'Obytes cool website: %s',
            meta: [
                {name: 'description', content: ''},
                {charset: 'utf-8'},
                {property: 'og:site_name', content: ''},
                {property: 'og:image', content: ''},
                {property: 'og:locale', content: ''},
                {property: 'og:title', content: ''},
                {property: 'og:description', content: ''},
                {property: 'og:card', content: ''},
                {property: 'og:site', content: ''},
                {property: 'og:creator', content: ''},
                {property: 'og:image:width', content: ''},
                {property: 'og:image:height', content: ''}
            ]
        }
    }
})
