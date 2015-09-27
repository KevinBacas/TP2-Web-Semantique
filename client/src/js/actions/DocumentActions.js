import DocumentStore from '../stores/DocumentStore';

var DocumentActions = {

  fetchDocuments(request) {
    var documents = [];
    console.log('action', 'fetchDocument : ' + request);
    DocumentStore.StoreDocuments(documents);
  },

  fetchContent(documentId) {
    var content = {}
    console.log('action', 'fetchContent : ' + documentId);
    DocumentStore.StoreContent(content);
  }

}

export default DocumentActions;
