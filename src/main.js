import Tokenizer from './Tokenizer';
import Indexer from './Indexer';
import { readDirectory, readFile, indexFile } from './utils';

const filename = './documents/';
const charset = 'utf8';

// On list les fichiers
let files = readDirectory(filename);
// Création de l'indexer
var indexer = new Indexer(files, files.length);
// Pour chaque ficher on le scan puis on le parse pour on l'index
files.map((file) => {
  let file_content = readFile(filename + file, charset);
  indexFile(file_content, indexer, file);
});

indexer.calculerPonderation();
