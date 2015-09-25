import fs from 'fs';

// Liste les documents présents dans un fichier en mode synchrone
export function readDirectory(pathname) {
  return fs.readdirSync(pathname);
}

// Lecture d'un fichier en mod synchrone
export function readFile(pathname, ...options) {
  return fs.readFileSync(pathname, ...options);
}

// Extrait les mot d'un text en minuscule
function extractWords(file_content) {
  return file_content.split(/\s+/).map((mot) => mot.toLowerCase());
}

// Index un fichier dans l'indexer
export function indexFile(file_content, indexer, document_name) {
  let words = extractWords(file_content);
  words.map((word) => {
    indexer.ajouterMot(word, document_name);
  });
}
