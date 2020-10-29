const webpack = require('webpack')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "public/sass/app.scss";
                `
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
};
