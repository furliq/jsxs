const lib = require('./src');
const repl = require("repl");

let replServer = repl.start({
  prompt: "jsxs> ",
  useGlobal: true
});
Object.assign(replServer.context, {
  mods: lib.mods,
  ...lib.globals
});