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

		//TODO: Supprimer le traitement de chaine
		this.requestArray = request.toString().split(/\s+/).map(function (mot) {
			return mot.toLowerCase();
		});
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
					var doc_name = docTable[doc];
					numerateur = this.indexer.ponderationMot(this.requestArray, doc_name);
					denominateur = this.indexer.ponderationMotCarre(this.requestArray, doc_name);
					res.push(isNaN(numerateur / denominateur) ? 0 : numerateur / denominateur);
				}
			}
			return res;
		}
	}, {
		key: 'resultatRequest',
		value: function resultatRequest() {
			var results = this.calculCoefficient();
			var documents = this.indexer.getDocumentArray();
			var res = new _immutable2['default'].OrderedMap();
			console.log(res);
			for (var i = 0; i < results.length; ++i) {
				res = res.set(results[i], {
					ponderation: results[i],
					document: documents[i]
				});
			}
			res = res.sortBy(function (doc) {
				return doc.ponderation;
			});
			return res.toJS();
		}
	}]);

	return Requeter;
})();

exports['default'] = Requeter;
module.exports = exports['default'];