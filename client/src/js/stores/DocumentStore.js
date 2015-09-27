
var DocumentStore = {

  state: {
    documents: {},
    content: {}
  },

  StoreDocuments(doc) {
    console.log('DocumentStore', 'StoreDocuments : ' + doc);
    this.state.documents = doc;
    console.log(this.state.documents);
    this.onChange();
  },

  StoreContent(content) {
    console.log('DocumentStore', 'StoreContent : ' + content);
    this.state.content = content;
  },

  getDocuments() {
    let doc = this.state.documents;
    let res = [];
    for(var index in doc) {
      if(doc[index].ponderation != 0) {
        res.push(doc[index]);
      }
    }
    return res;
  },

  getContent() {
    return this.state.content;
  },

  onChangeContent() {},
  
  onChange() {}

};

export default DocumentStore;
