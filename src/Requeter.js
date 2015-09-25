class Requeter {
	constructor(request, indexer) {
		//TODO: Supprimer le traitement de chaine
		this.requestArray = request.toString().split(/\s+/).map((mot) => mot.toLowerCase());
		this.indexer = indexer;
	}

	calculCoefficient() {
		// C(v,r) = Somme (pondération des mot) / Racine(Somme (pondération des mot)²
		var docTable = this.indexer.getDocumentArray;
		var res = [];
		var numerateur = 0;
		var denominateur = 0;
		for(let doc in docTable) {
			if(docTable.hasOwnProperty(doc)) {
				numerateur = this.indexer.ponderation(this.requestArray, doc);
				denominateur = this.indexer.ponderationCarre(this.requestArray, doc);
				res.push(numerateur/denominateur);
			}
		}
		return res;
	}

	resultatRequest() {
		//TODO: Renvoyer la liste des documents par ordre de pondération
		//TODO: Renvoyer la pondération avec la liste des documents
	}
}

export default Requeter;
