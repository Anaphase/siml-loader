'use strict'

let siml = require('siml')

module.exports = function(source) {
  this.cacheable && this.cacheable()

  let compiledSource = siml.angular.parse(source, {
    pretty: false
  })

  this.callback(null, `module.exports = ${JSON.stringify(compiledSource)}`)
}
