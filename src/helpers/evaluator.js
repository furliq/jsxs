function isImport(cmd) {
    return cmd.match(/^\s*import/);
}

function toRequire(input) {
    let str = '';
    const isSpecific = input.includes('from');
    const file = input.split(isSpecific ? 'from' : 'import').pop().replace(/[ \'\"\`\n]/g, '');

    if (isSpecific) {
        if (input.includes('as')) {
            if (input.includes('*')) {
                // only supports: import * as X from 'file' (for now)
                const name = input.split(/(from|as)/)[2].trim();
                str = `const ${name} = require('${file}')`;
            }
            else {
                const imports = input.split(/(import|from)/)[2].trim().replace(/[\{\}]/g, '').split(/,/)
                    .map(x => x.split('as').map(x => x.trim()));
                const vars = imports.map(x => x[0]);
                const aliases = imports.map(x => x[1]);
                const varList = vars.join(',');

                console.log(vars, aliases);
                str = `let {${varList}} = require('${file}'); const [${aliases.join(',')}] = [${varList}]`;
                console.log(str);
            }
        }
        else {
            const vars = input.match(/{.*}/)[0];
            str = `const ${vars} = require('${file}')`;
        }
    }
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
            // console.log(cmd);
        }
        result = vm.runInThisContext(cmd);
    } catch (e) {
        if (isRecoverable(e)) console.log(e.name + ': ' + e.message);
        else console.error(e);
    }
    cb(null, result);
}