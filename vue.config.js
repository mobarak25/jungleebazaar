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
};