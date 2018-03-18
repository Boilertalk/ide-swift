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

    return childProcess
  }
}

module.exports = new SwiftLanguageClient()
