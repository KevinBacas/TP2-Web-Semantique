import fs from 'fs';

export function readDirectory(pathname) {
    return fs.readdirSync('./documents/');
}

export function readFile(pathname, ...options) {
    return fs.readFileSync(pathname, ...options);
}

function extractWords(file_content) {
    return file_content.split(/\s+/).map((mot) => mot.toLowerCase());
}

export function indexFile(file_content, indexer, document_name) {
    let words = extractWords(file_content);
    words.map((word) => {
        indexer.ajouterMot(word, document_name);
    });
}