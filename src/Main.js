import Indexer from './Indexer';
import Requeter from './Requeter';
import { readDirectory, readFile, indexFile } from './Utils';

const filename = './documents/';
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

indexer.calculerPonderation();
let requeter = new Requeter("Les sanglots longs", indexer);
requeter.resultatRequest();
