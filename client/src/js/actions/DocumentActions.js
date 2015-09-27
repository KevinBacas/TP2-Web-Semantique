import DocumentStore from '../stores/DocumentStore';
import $ from 'jquery';

var DocumentActions = {

  fetchDocuments(request) {
    console.log('action', 'fetchDocument : ' + request);
    $.ajax({
      url: '/request/?req=' + request,
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        DocumentStore.StoreDocuments(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/request', status, err.toString());
      }.bind(this)
    });
  },

  fetchContent(documentId) {
    var content = {}
    console.log('action', 'fetchContent : ' + documentId);
    DocumentStore.StoreContent(content);
  }

};

export default DocumentActions;
