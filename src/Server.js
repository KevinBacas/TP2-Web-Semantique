import Indexer from './Indexer';
import Requeter from './Requeter';
import { readDirectory, readFile, indexFile } from './Utils';

// Dossier avec tous les documents
const filename = './documents/';
// Charset des fichiers à lire
const charset = 'utf8';

// On list les fichiers
let files = readDirectory(filename);
// Création de l'indexer
let indexer = new Indexer(files, files.length);
// Pour chaque ficher on le scan puis on le parse pour on l'index
files.map((file) => {
  let file_content = readFile(filename + file, charset);
  indexFile(file_content, indexer, file);
});

// On calcul les pondération dans l'indexer
indexer.calculerPonderation();

// Création du serveur
var express = require('express');
var app = express();
import morgan from 'morgan';

var format = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time ms :res[content-length] ":referrer" ":user-agent"';
app.use(morgan(format));

// GET / => ./client/dist/
app.use('/', express.static('client/dist/'));
// GET /documents/ => ./documents/
app.use('/documents/', express.static('documents/'));

// GET /request/
app.get('/request/', function (req, res) {
  if(req.query.req) {
    let request = req.query.req.split(/\s+/).map((mot) => mot.toLowerCase());
    let requeter = new Requeter(request, indexer);
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
