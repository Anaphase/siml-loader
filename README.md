# SIML loader for webpack

Adds [SIML](https://github.com/padolsey/SIML) support to webpack.

## Usage

``` javascript
const compiledHtml = require('./template.siml')
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
  module: {
    loaders: [
      {
        test: /\.siml$/,
        loader: 'siml-loader'
      }
    ]
  }
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
