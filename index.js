const postcss = require('postcss')

module.exports = postcss.plugin('postcss-important-shorthand', () => {
  return css => {
    css.walkDecls(decl => {
      if (decl.important || decl.value.indexOf('!') === -1) {
        return
      }

      decl.value = decl.value.replace('!', '').trim()
      decl.important = true
    })
  }
})
