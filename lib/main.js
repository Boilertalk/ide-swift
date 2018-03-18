const { AutoLanguageClient } = require('atom-languageclient')

class SwiftLanguageClient extends AutoLanguageClient {

  getGrammarScopes () {
    return ['source.swift']
  }

  getLanguageName () {
    return 'Swift'
  }

  getServerName () {
    return 'Langserver Swift'
  }

  startServerProcess () {
    let a = super.spawnChildNode(['langserver-swift'])
    console.log(a)
    return a
  }
}

console.log("*** IDE JAVA ***")

module.exports = new SwiftLanguageClient()
