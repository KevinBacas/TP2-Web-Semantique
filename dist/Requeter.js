'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var Requeter = (function () {
	function Requeter(request, indexer) {
		_classCallCheck(this, Requeter);

		this.requestArray = request;
		this.indexer = indexer;
	}

	_createClass(Requeter, [{
		key: 'calculCoefficient',
		value: function calculCoefficient() {
			// C(v,r) = Somme (pondération des mot) / Racine(Somme (pondération des mot)²
			var docTable = this.indexer.getDocumentArray();
			var res = [];
			var numerateur = 0;
			var denominateur = 0;
			for (var doc in docTable) {
				if (docTable.hasOwnProperty(doc)) {
					// On récupère le nom du fichier
					var doc_name = docTable[doc];
					// Calcul du numérateur
					numerateur = this.indexer.ponderationMot(this.requestArray, doc_name);
					// Calcul du dénominateur
					denominateur = Math.sqrt(this.indexer.ponderationMotCarre(this.requestArray, doc_name));
					// On ajoute le résultat à la liste
					res.push({
						document: doc_name,
						ponderation: isNaN(numerateur / denominateur) ? 0 : numerateur / denominateur
					});
				}
			}
			return res;
		}
	}, {
		key: 'resultatRequest',
		value: function resultatRequest() {
			// Calcul des coefficients de la requête
			var results = this.calculCoefficient();
			// Création d'une liste ordonnée
			var res = new _immutable2['default'].OrderedMap();
			// Ajout des entrées dans la liste
			results.map(function (doc) {
				return res = res.set(doc.ponderation, doc);
			});
			// Tri sur la liste
			res = res.sortBy(function (doc) {
				return doc.ponderation;
			});
			// Conversion des résultat en objet javascript et renvoie de l'objet
			return res.toJS();
		}
	}]);

	return Requeter;
})();

exports['default'] = Requeter;
module.exports = exports['default'];