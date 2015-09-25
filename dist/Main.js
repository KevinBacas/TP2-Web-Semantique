'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Indexer = require('./Indexer');

var _Indexer2 = _interopRequireDefault(_Indexer);

var _Requeter = require('./Requeter');

var _Requeter2 = _interopRequireDefault(_Requeter);

var _Utils = require('./Utils');

// Dossier avec tous les documents
var filename = './documents/';
// Charset des fichiers à lire
var charset = 'utf8';

// On list les fichiers
var files = (0, _Utils.readDirectory)(filename);
// Création de l'indexer
var indexer = new _Indexer2['default'](files, files.length);
// Pour chaque ficher on le scan puis on le parse pour on l'index
files.map(function (file) {
  var file_content = (0, _Utils.readFile)(filename + file, charset);
  (0, _Utils.indexFile)(file_content, indexer, file);
});

// On calcul les pondération dans l'indexer
indexer.calculerPonderation();
// On instancie l'objet de traitement des requêtes
var requeter = new _Requeter2['default'](process.argv.slice(2), indexer);
// Calcul des résultats de la requête
var results = requeter.resultatRequest();
// Affichage des résultats dans la console
console.log(results);
// console.log(indexer.Mots);