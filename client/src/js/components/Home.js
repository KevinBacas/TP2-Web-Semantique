import React from 'react';
import RequestList from './RequestList';
import DocumentActions from '../actions/DocumentActions';
import DocumentStore from '../stores/DocumentStore';

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      documents: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let request = document.getElementById('request').value;
    console.log('Home, handleSubmit', request);
    DocumentActions.fetchDocuments(request);
  }

  onChange() {
    let documents = DocumentStore.getDocuments();
  }

  conponentWillUnmount() {
    this.setState({});
  }

  componentDidMount() {
    DocumentStore.onChange = this.onChange;
  }

  render() {
    return (
      <div>
        <form 
          className="homePage"
          onSubmit={this.handleSubmit}
          action="return false;">
          <input
            id="request"
            placeholder="your request"
            type="text" />
          <input
            type="submit"
            value="search" />
        </form>
        <RequestList list={this.state.documents} />
      </div>
    );
  }
};

