import postcss from 'postcss';
import test from 'ava';
import fs from 'fs';
import path from 'path';
import plugin from './index';

function run(t, input, output, opts = { }) {
    const testsDir = './fixtures/';
    const inputName = input;
    const expectName = output;
    const inputPath  = path.resolve(testsDir + inputName);
    const expectPath = path.resolve(testsDir + expectName);
    const inputCSS = fs.readFileSync(inputPath, 'utf8');
    const expectCSS = fs.readFileSync(expectPath, 'utf8');

    return postcss([ plugin(opts) ]).process(inputCSS)
        .then( result => {
            t.same(result.css, expectCSS);
            t.same(result.warnings().length, 0);
        });
}

test('does something', t => {
    return run(t, 'style.css', 'style-expected.css', { });
});
