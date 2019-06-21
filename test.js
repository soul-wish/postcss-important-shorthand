const postcss = require('postcss')
const test = require('ava')
const fs = require('fs')
const path = require('path')

const plugin = require('./index')

function run (t, input, output, opts = { }) {
  let testsDir = './fixtures/'
  let inputName = input
  let expectName = output
  let inputPath = path.resolve(testsDir + inputName)
  let expectPath = path.resolve(testsDir + expectName)
  let inputCSS = fs.readFileSync(inputPath, 'utf8')
  let expectCSS = fs.readFileSync(expectPath, 'utf8')

  return postcss([plugin(opts)]).process(inputCSS)
    .then(result => {
      t.deepEqual(result.css, expectCSS)
      t.is(result.warnings().length, 0)
    })
}

test('plugin does the magic', t => {
  return run(t, 'style.css', 'style-expected.css', { })
})
