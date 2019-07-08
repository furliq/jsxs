const repl = require('repl');

const {extract} = require('./src/util');
const mods = Object.keys(extract(require('./mods')))
const lib = require('./src');

const evaluator = require('./src/helpers/evaluator')

let replServer = repl.start({
  prompt: "jsxs> ",
  useGlobal: true,
  eval: evaluator
});
Object.assign(replServer.context, { ...lib, mods });