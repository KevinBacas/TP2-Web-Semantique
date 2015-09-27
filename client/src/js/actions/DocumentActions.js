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
        console.error('/request/', status, err.toString());
      }.bind(this)
    });
  },

  fetchContent(documentName) {
    var content = {}
    console.log('action', 'fetchContent : ' + documentName);
    $.ajax({
      url: '/documents/' + documentName,
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        DocumentStore.StoreContent(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/documents/', status, err.toString());
      }.bind(this)
    });
  }

};

export default DocumentActions;
