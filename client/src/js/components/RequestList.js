import React from 'react';

export default class RequestList extends React.Component {

  handleClick(e) {
    e.preventDefault();
    console.log('requestList, handleClick', e.target.value);
  }

  render() {
    var RequestNode = "";
    console.log('requestList, render', this.props.list);
    /*
    if(this.props.list !== undefined) {
      RequestNode = this.props.list.map(function(doc) {
        <div
          className="RequestList"
          onClick={handleClick} >
          <h4>doc.name</h4>
        </div>
      });
    }
    */
    return (
      <div>
        {RequestNode}
      </div>
    )
  }

}
