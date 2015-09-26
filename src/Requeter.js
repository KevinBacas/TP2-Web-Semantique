import Immutable from 'immutable';

class Requeter {
	constructor(request, indexer) {
		this.requestArray = request;
		this.indexer = indexer;
	}

	calculCoefficient() {
		// C(v,r) = Somme (pondération des mot) / Racine(Somme (pondération des mot)²
		let docTable = this.indexer.getDocumentArray();
		let res = [];
		let numerateur = 0;
		let denominateur = 0;
		for(let doc in docTable) {
		  if(docTable.hasOwnProperty(doc)) {
				// On récupère le nom du fichier
				let doc_name = docTable[doc];
				// Calcul du numérateur
				numerateur = this.indexer.ponderationMot(this.requestArray, doc_name);
				// Calcul du dénominateur
				denominateur = Math.sqrt(this.indexer.ponderationMotCarre(this.requestArray, doc_name));
				// On ajoute le résultat à la liste
				res.push({
					document: doc_name,
					ponderation: isNaN(numerateur/denominateur) ? 0 : numerateur/denominateur
				});
		  }
		}
		return res;
	}

	resultatRequest() {
		// Calcul des coefficients de la requête
		let results = this.calculCoefficient();
		// Création d'une liste ordonnée
		let res = new Immutable.OrderedMap();
		// Ajout des entrées dans la liste
		results.map((doc) => res = res.set(doc.document, doc));
		// Tri sur la liste
		res = res.sortBy((doc) => doc.ponderation);
		// Conversion des résultat en objet javascript et renvoie de l'objet
		return res.toJS();
	}
}

export default Requeter;
