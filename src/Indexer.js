class Indexer {
  constructor(documentArray, nombreDocuments) {
    this.Mots = {};
    this.Document = documentArray;
    this.nbDocuments = nombreDocuments;
  }

  ajouterMot(word, document_name) {
    if(this.Mots[word]) {
      this.Mots[word].nb_occurences++;
      if(this.Mots[word][document_name]) {
        this.Mots[word][document_name].nb_occurences++;
      } else {
        this.Mots[word][document_name] = { nb_occurences: 1 };
      }
    } else {
      this.Mots[word] = { nb_occurences: 1 };
      this.Mots[word][document_name] = { nb_occurences: 1 };
    }
  }

  calculerPonderation() {
    // Nombre_oc_doc * log(nombre_doc / nombre_doc_mot)
    for (var prop_mot in this.Mots) {
      if (this.Mots.hasOwnProperty(prop_mot)) {
        let mot = this.Mots[prop_mot];
        for(var prop_doc in mot) {
          if(mot.hasOwnProperty(prop_doc) &&
            prop_mot !== "nb_occurences") {
            let doc = mot[prop_doc];
            let ponderation = doc.nb_occurences * Math.log(this.nbDocuments / (Object.keys(mot).length-1));
            Object.assign(doc, { ponderation: ponderation });
          }
        }
      }
    }
  }

  ponderationMot(motArray, documentName) {
    var ponderation = 0;
    for(let mot in motArray) {
      let mot_label = motArray[mot];
      if(this.Mots[mot_label] && this.Mots[mot_label][documentName]) {
        ponderation += this.Mots[mot_label][documentName].ponderation;
      }
    }
    return ponderation;
  }

  ponderationMotCarre(motArray, documentName) {
    var ponderationCarre = 0;
    for(let mot in motArray) {
      let mot_label = motArray[mot];
      if(this.Mots[mot_label] && this.Mots[mot_label][documentName]) {
        ponderationCarre += Math.pow(this.Mots[mot_label][documentName].ponderation, 2);
      }
    }
    return ponderationCarre;
  }

  getDocumentArray() {
    return this.Document;
  }
}

export default Indexer;
