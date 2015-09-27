import React from 'react';
import DocumentStore from '../stores/DocumentStore';

export default class DocumentContent extends React.Component {

  constructor() {
    super();
    let content = DocumentStore.getContent();
    this.state = {
      content: content
    };
  }

  render() {
    var style = {
      fontFamily: 'Arial',
      fontSize: '20'
    };
    return (
      <div
        style={style}
        className="content" >
        {this.state.content}
      </div>
    )
  }

}
