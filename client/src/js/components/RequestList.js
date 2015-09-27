import React from 'react';

export default class RequestList extends React.Component {

  render() {
    var RequestNode = "";
    if(this.props.list) {
      RequestNode = this.props.list.map(function(doc) {
        <h4>doc.name</h4>
      });
    }
    return (
      <div>
        {RequestNode}
      </div>
    )
  }

}
