"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Indexer = (function () {
    function Indexer(nombreDocuments) {
        _classCallCheck(this, Indexer);

        console.log("Constructing Indexer..");
        this.Mots = {};
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
                            if (ponderation == 0) {
                                console.log(prop_mot, ponderation);
                            }
                            Object.assign(doc, { ponderation: ponderation });
                        }
                    }
                }
            }
        }
    }, {
        key: "ponderationMot",
        value: function ponderationMot(mot) {}
    }]);

    return Indexer;
})();

exports["default"] = Indexer;
module.exports = exports["default"];