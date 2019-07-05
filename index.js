require('./src');

const repl = require("repl");

let r = repl.start({
  prompt: "jsxs> ",
  useGlobal: true
});
Object.assign(r.context, require('./src/globals'));