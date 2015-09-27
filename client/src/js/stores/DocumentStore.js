
var DocumentStore = {

  state: {
    documents: {},
    content: {}
  },

  StoreDocuments(doc) {
    this.state.documents = doc;
    this.onChange();
  },

  StoreContent(content) {
    this.state.content = content;
    this.onChangeContent();
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
