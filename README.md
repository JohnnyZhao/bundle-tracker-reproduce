# bundle-tracker-reproduce

### setup

First, you should have webpack installed

```
npm install
```

### build

```
webpack
```

After build, there are two bundle files generate in folder assets:

```
assets/bundle_en.js
assets/bundle_de.js
```

But in webpack-stats.json file, only one bundle js file is tracked

```
{"status":"done","chunks":{"main":[{"name":"./assets/bundle_de.js","path":"/Users/john/dev/bundle-tracker-reproduce/assets/bundle_de.js"}]}}
```
