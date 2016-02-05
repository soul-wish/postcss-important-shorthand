var postcss = require('postcss');

module.exports = postcss.plugin('postcss-important-shorthand', function (opts) {
    opts = opts || {};

    var transformDecl = function (decl) {
        if (decl.important || decl.value.indexOf('!') === -1) {
            return;
        }

        decl.value = decl.value.replace('!', '').trim();
        decl.important = true;
    };

    return function (css) {
        css.walkDecls(transformDecl);
    };
});
