import React from 'react';
import RequestList from './RequestList';
import DocumentActions from '../actions/DocumentActions';
import DocumentStore from '../stores/DocumentStore';

export default class Home extends React.Component {

  constructor() {
    this.state = {
      documents = {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    DocumentActions.fetchDocuments(e.target.value);
  }

  onChange() {
    let documents = DocumentStore.getDocuments();
  }

  conponentWillUnmount() {
    this.setState(
      document = {}
    );
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

