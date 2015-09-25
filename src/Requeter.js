import Immutable from 'immutable';

class Requeter {
	constructor(request, indexer) {
		//TODO: Supprimer le traitement de chaine
		this.requestArray = request.toString().split(/\s+/).map((mot) => mot.toLowerCase());
		this.indexer = indexer;
	}

	calculCoefficient() {
		// C(v,r) = Somme (pondération des mot) / Racine(Somme (pondération des mot)²
		var docTable = this.indexer.getDocumentArray();
		var res = [];
		var numerateur = 0;
		var denominateur = 0;
		for(var doc in docTable) {
		  if(docTable.hasOwnProperty(doc)) {
			let doc_name = docTable[doc];
			numerateur = this.indexer.ponderationMot(this.requestArray, doc_name);
			denominateur = this.indexer.ponderationMotCarre(this.requestArray, doc_name);
			res.push(isNaN(numerateur/denominateur) ? 0 : numerateur/denominateur);
		  }
		}
		return res;
	}

	resultatRequest() {
		let results = this.calculCoefficient();
		let documents = this.indexer.getDocumentArray();
		let res = new Immutable.OrderedMap();
		console.log(res);
		for(let i = 0 ; i < results.length ; ++i) {
			res = res.set(results[i], {
				ponderation: results[i],
				document: documents[i]
			});
		}
		res = res.sortBy((doc) => doc.ponderation);
		return res.toJS();
	}
}

export default Requeter;
