import React from 'react';
import reactMixin from 'react-mixin';
import {Navigation} from 'react-router';
import DocumentActions from '../actions/DocumentActions';
import DocumentStore from '../stores/DocumentStore';

export default class RequestList extends React.Component {

  handleClick(e) {
    e.preventDefault();
    console.log('requestList, handleClick', e.target.value);
    console.log(e.target.textContent);
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
    console.log('requestList, render', this.props.list);
    if(this.props.list !== false) {
      RequestNode = this.props.list.map(function(doc) {
        return (
          <div
            className="RequestList"
            onClick={this.handleClick} >
            {doc.document}
          </div>
        )
      }.bind(this));
    }
    return (
      <div style={Style} >
        {RequestNode}
      </div>
    )
  }

}

reactMixin.onClass(RequestList, Navigation);
