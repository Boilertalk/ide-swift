const cp = require('child_process')
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
    let command = 'langserver-swift'
    this.logger.debug(`Starting "${command}"`)
    let childProcess = cp.spawn(command)
    console.log(childProcess)
    return childProcess
  }
}

this.logger.debug("*** IDE Swift ***")

module.exports = new SwiftLanguageClient()
