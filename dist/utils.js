'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.readDirectory = readDirectory;
exports.readFile = readFile;
exports.indexFile = indexFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function readDirectory(pathname) {
    return _fs2['default'].readdirSync('./documents/');
}

function readFile(pathname) {
    for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
    }

    return _fs2['default'].readFileSync.apply(_fs2['default'], [pathname].concat(options));
}

function extractWords(file_content) {
    return file_content.split(/\s+/).map(function (mot) {
        return mot.toLowerCase();
    });
}

function indexFile(file_content, indexer, document_name) {
    var words = extractWords(file_content);
    words.map(function (word) {
        indexer.ajouterMot(word, document_name);
    });
}