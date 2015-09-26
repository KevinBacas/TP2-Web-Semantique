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
let request = process.argv.slice(2).map((mot) => mot.toLowerCase());
let requeter = new Requeter(request, indexer);
// Calcul des résultats de la requête
let results = requeter.resultatRequest();
// Affichage des résultats dans la console
for (var result in results) {
  if (results.hasOwnProperty(result)) {
    let result_obj = results[result];
    console.log(result_obj.document, result_obj.ponderation);
  }
}
// console.log(indexer.Mots);
