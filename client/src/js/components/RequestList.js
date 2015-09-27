import React from 'react';
import reactMixin from 'react-mixin';
import {Navigation} from 'react-router';
import DocumentActions from '../actions/DocumentActions';
import DocumentStore from '../stores/DocumentStore';

export default class RequestList extends React.Component {

  handleClick(e) {
    e.preventDefault();
    DocumentActions.fetchContent(e.target.textContent);
  }

  onChange() {
    this.transitionTo('content');
  }

  componentDidMount() {
    DocumentStore.onChangeContent = this.onChange.bind(this);
  }

  render() {
    var RequestNode = "";
    var Style = {
      fontFamily: 'Arial',
      fontSize: '20'
    };
    if(this.props.list !== false) {
      RequestNode = this.props.list.map(function(doc) {
        return (
          <tr
            className="RequestList"
            onClick={this.handleClick} >
            <th> {doc.document} </th>
            <th>{doc.ponderation}</th>
          </tr>
        )
      }.bind(this));
    }
    var tableInstance = (
      <table className="table" >
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Ponderation </th>
          </tr>
        </thead>
        <tbody>
          {RequestNode}
        </tbody>
      </table>
    );
    return (
      <div style={Style} >
        {this.props.list !== false ? (
          {tableInstance}
          ) : (
          {RequestNode}
          )}
        </div>
    )
  }

}

reactMixin.onClass(RequestList, Navigation);
