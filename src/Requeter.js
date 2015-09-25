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
			res.push(numerateur/denominateur);
		  }
		}
		return res;
	}

	resultatRequest() {
		//TODO: Renvoyer la liste des documents par ordre de pondération
		let results = this.calculCoefficient();
		let documents = this.indexer.getDocumentArray();
		console.log("results", results);
		console.log("documents", documents);
		//TODO: Renvoyer la pondération avec la liste des documents
	}
}

export default Requeter;
