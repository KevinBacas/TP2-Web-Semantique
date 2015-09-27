
var DocumentStore = {

  state: {
    documents: [],
    content: {}
  },

  StoreDocuments(doc) {
    console.log('DocumentStore', 'StoreDocuments : ' + doc);
    this.state.documents = doc;
    this.onChange();
  },

  StoreContent(content) {
    console.log('DocumentStore', 'StoreContent : ' + content);
  },

  getDocuments() {
    return this.state.documents;
  },

  getContent() {
    return this.state.content;
  },

  onChange() {}

}

export default DocumentStore;
