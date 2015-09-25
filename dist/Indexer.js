"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Indexer = (function () {
  function Indexer(documentArray, nombreDocuments) {
    _classCallCheck(this, Indexer);

    this.Mots = {};
    this.Document = documentArray;
    this.nbDocuments = nombreDocuments;
  }

  _createClass(Indexer, [{
    key: "ajouterMot",
    value: function ajouterMot(word, document_name) {
      if (this.Mots[word]) {
        this.Mots[word].nb_occurences++;
        if (this.Mots[word][document_name]) {
          this.Mots[word][document_name].nb_occurences++;
        } else {
          this.Mots[word][document_name] = { nb_occurences: 1 };
        }
      } else {
        this.Mots[word] = { nb_occurences: 1 };
        this.Mots[word][document_name] = { nb_occurences: 1 };
      }
    }
  }, {
    key: "calculerPonderation",
    value: function calculerPonderation() {
      // Nombre_oc_doc * log(nombre_doc / nombre_doc_mot)
      for (var prop_mot in this.Mots) {
        if (this.Mots.hasOwnProperty(prop_mot)) {
          var mot = this.Mots[prop_mot];
          for (var prop_doc in mot) {
            if (mot.hasOwnProperty(prop_doc) && prop_mot !== "nb_occurences") {
              var doc = mot[prop_doc];
              var ponderation = doc.nb_occurences * Math.log(this.nbDocuments / (Object.keys(mot).length - 1));
              Object.assign(doc, { ponderation: ponderation });
            }
          }
        }
      }
    }
  }, {
    key: "ponderationMot",
    value: function ponderationMot(motArray, documentName) {
      var ponderation = 0;
      for (var mot in motArray) {
        if (this.Mots[mot] && this.Mots[mot][documentName]) {
          ponderation += this.Mots[mot][documentName].ponderation;
        }
      }
      return ponderation;
    }
  }, {
    key: "ponderationMotCarre",
    value: function ponderationMotCarre(motArray, documentName) {
      var ponderationCarre = 0;
      for (var mot in motArray) {
        if (this.Mots[mot] && this.Mots[mot][documentName]) {
          ponderationCarre += Math.pow(this.Mots[mot][documentName].ponderation, 2);
        }
      }
      return ponderationCarre;
    }
  }, {
    key: "getDocumentArray",
    value: function getDocumentArray() {
      return this.Document;
    }
  }]);

  return Indexer;
})();

exports["default"] = Indexer;
module.exports = exports["default"];