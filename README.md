# bundle-tracker-reproduce

### setup

First, you should have webpack installed

Then, install webpack bundle tracker and other dependencies:

```
npm install
```

### build

```
webpack
```

I use an [i18n plugin](https://github.com/webpack/webpack/tree/master/examples/i18n) to generate multiple bundle js files for string translation, so in this case after build, there are two bundle files generated under folder assets:

```
assets/bundle_en.js
assets/bundle_de.js
```

But in webpack-stats.json file, only one bundle js file is tracked

```
{"status":"done","chunks":{"main":[{"name":"./assets/bundle_de.js","path":"/Users/john/dev/bundle-tracker-reproduce/assets/bundle_de.js"}]}}
```
