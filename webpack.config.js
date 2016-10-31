module.exports = {
    entry : './main.js',
    output : {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 3333
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
          }
        ]
    }
};
