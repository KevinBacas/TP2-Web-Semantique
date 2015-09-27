import React from 'react';
import RequestList from './RequestList';
import DocumentActions from '../actions/DocumentActions';
import DocumentStore from '../stores/DocumentStore';

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      documents: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let request = document.getElementById('request').value;
    DocumentActions.fetchDocuments(request);
  }

  onChange() {
    let doc= DocumentStore.getDocuments();
    if(doc === []) {
      doc = false;
    }
    this.setState({
      documents: doc
    });
  }

  conponentWillUnmount() {
    this.setState({});
  }

  componentDidMount() {
    DocumentStore.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div className="container" >
        <form 
          className="homePage"
          onSubmit={this.handleSubmit}
          action="return false;">
          <input
            type="text"
            className="form-control"
            id="request"
            placeholder="your request" />
          <input
            className="btn btn-default"
            type="submit"
            value="search" />
        </form>
        <RequestList list={this.state.documents} />
      </div>
    );
  }
};

