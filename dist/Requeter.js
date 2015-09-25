"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Requeter = (function () {
	function Requeter(request, indexer) {
		_classCallCheck(this, Requeter);

		//TODO: Supprimer le traitement de chaine
		this.requestArray = request.toString().split(/\s+/).map(function (mot) {
			return mot.toLowerCase();
		});
		this.indexer = indexer;
	}

	_createClass(Requeter, [{
		key: "calculCoefficient",
		value: function calculCoefficient() {
			// C(v,r) = Somme (pondération des mot) / Racine(Somme (pondération des mot)²
			var docTable = this.indexer.getDocumentArray();
			var res = [];
			var numerateur = 0;
			var denominateur = 0;
			for (var doc in docTable) {
				if (docTable.hasOwnProperty(doc)) {
					var doc_name = docTable[doc];
					numerateur = this.indexer.ponderationMot(this.requestArray, doc_name);
					denominateur = this.indexer.ponderationMotCarre(this.requestArray, doc_name);
					res.push(numerateur / denominateur);
				}
			}
			return res;
		}
	}, {
		key: "resultatRequest",
		value: function resultatRequest() {
			//TODO: Renvoyer la liste des documents par ordre de pondération
			var results = this.calculCoefficient();
			var documents = this.indexer.getDocumentArray();
			console.log("results", results);
			console.log("documents", documents);
			//TODO: Renvoyer la pondération avec la liste des documents
		}
	}]);

	return Requeter;
})();

exports["default"] = Requeter;
module.exports = exports["default"];