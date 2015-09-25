'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Indexer = require('./Indexer');

var _Indexer2 = _interopRequireDefault(_Indexer);

var _utils = require('./utils');

var filename = './documents/';
var charset = 'utf8';

// On list les fichiers
var files = (0, _utils.readDirectory)(filename);
// Création de l'indexer
var indexer = new _Indexer2['default'](files, files.length);
// Pour chaque ficher on le scan puis on le parse pour on l'index
files.map(function (file) {
  var file_content = (0, _utils.readFile)(filename + file, charset);
  (0, _utils.indexFile)(file_content, indexer, file);
});

indexer.calculerPonderation();