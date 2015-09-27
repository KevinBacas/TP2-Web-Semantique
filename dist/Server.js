'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Indexer = require('./Indexer');

var _Indexer2 = _interopRequireDefault(_Indexer);

var _Requeter = require('./Requeter');

var _Requeter2 = _interopRequireDefault(_Requeter);

var _Utils = require('./Utils');

// Dossier avec tous les documents

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

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

// Création du serveur
var express = require('express');
var app = express();

var format = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time ms :res[content-length] ":referrer" ":user-agent"';
app.use((0, _morgan2['default'])(format));

// GET / => ./client/dist/
app.use('/', express['static']('client/dist/'));
// GET /documents/ => ./documents/
app.use('/documents/', express['static']('documents/'));

// GET /request/
app.get('/request/', function (req, res) {
  if (req.query.req) {
    var request = req.query.req.split(/\s+/).map(function (mot) {
      return mot.toLowerCase();
    });
    var requeter = new _Requeter2['default'](request, indexer);
    res.json(requeter.resultatRequest());
  } else {
    res.send('Request failed for some reason...');
  }
});

// Activation du serveur
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});