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
// On instancie l'objet de traitement des requêtes
let requeter = new Requeter(process.argv.slice(2), indexer);
// Calcul des résultats de la requête
let results = requeter.resultatRequest();
// Affichage des résultats dans la console
console.log(results);
// console.log(indexer.Mots);
