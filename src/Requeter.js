
class Requeter {
	constructor(request, indexer) {
		this.requestArray = request.toString().split(/\s+/).map((mot) => mot.toLowerCase());
		this.indexer = indexer;
	}

	calculCoefficient() {
		// C(v,r) = Somme (pondération des mot) / Racine(Somme (pondération des mot)²
		var docTable = this.indexer.getDocumentArray;
		var res = [];
		var numerateur = 0;
		var denominateur = 0;
		for(doc in docTable) {
			numerateur = this.indexer.ponderation(this.requestArray, doc);
			denominateur = this.indexer.ponderationCarre(this.requestArray, doc);
			res.push(numerateur/denominateur);
		}
		return res;
	}

	resultatRequest() {}
}