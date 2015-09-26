# TP2-Web-Semantique

# Server
## API
### Faire une requête
`GET /request/` permet de faire une requête. Le paramètre `req` est à fournir sous forme de chaine.
Ex: `/request/?req="J'aime les frites."`
La réponse est sous la forme :
```javascript
{
  "doc_1.txt" : {
    document: "doc_1.txt",
    ponderation: 2
  },
  "doc_2.txt" : {
    document: "doc_2.txt",
    ponderation: 1
  }
}
```
Les résultats sont triés du plus pertinents au moins pertinent.

### Récupérer le contenu d'un document
`GET /documents/<document_name>`
Renvoi le contenu du document sous forme de texte.
