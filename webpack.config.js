var path = require("path");
var BundleTracker  = require('webpack-bundle-tracker');
var I18nPlugin = require("i18n-webpack-plugin");

var languages = {
    "en": null,
    "de": require("./trans/de.json")
};


module.exports = Object.keys(languages).map(function(language) {
    return {
        context: __dirname,
        entry: "./entry.js",
        output: {
            path: __dirname,
            filename: "bundle_" + language + ".js"
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" }
            ]
        },
        plugins: [
            new BundleTracker({path: __dirname, filename: './webpack-stats.json'}),
            new I18nPlugin(languages[language])
        ]
    };
});
