function isImport(cmd) {
    return cmd.match(/^\s*import/);
}

function toRequire(input) {
    let str = '';
    const isSpecific = input.includes('from');
    const file = input.split(isSpecific ? 'from' : 'import').pop().replace(/[ \'\"\`\n]/g, '');

    if (isSpecific) {
        if (input.includes('as')) {
            // import * as myModule from './fileName'
            if (input.includes('*')) {
                const name = input.split(/(from|as)/)[2].trim();
                str = `const ${name} = require('${file}')`;
            }
            // import {varX as aliasX, varY as aliasY} from './fileName'
            else {
                const imports = input.split(/(import|from)/)[2].trim()
                    .replace(/[\{\}]/g, '').split(/,/)
                    .map(x => x.split('as').map(x => x.trim()));
                const [vars, aliases] = [imports.map(x => x[0]), imports.map(x => x[1])];
                const varList = vars.join(',');
                const aliasList = aliases.join(',');
                str = `let {${varList}} = require('${file}'); const [${aliasList}] = [${varList}]`;
            }
        }
        // import {x, y} from './myFile'
        else {
            const vars = input.match(/{.*}/).shift();
            str = `const ${vars} = require('${file}')`;
        }
    }
    // import './myFile'
    else {
        str = `require('${file}')`;
    }

    return str;
}

function isRecoverable(error) {
    return (error.name === 'ReferenceError' ||
        error.name === 'TypeError' || error.name === 'SyntaxError');
}

module.exports = function (cmd, context, filename, cb) {
    let result;
    try {
        if (isImport(cmd)) {
            cmd = toRequire(cmd);
        }
        result = vm.runInThisContext(cmd);
    } catch (e) {
        if (isRecoverable(e))
            console.log(e.name + ': ' + e.message);
        else console.error(e);
    }
    cb(null, result);
}