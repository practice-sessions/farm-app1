import React, { Component } from 'react';

 
class FarmCrop extends Component {
  render() {
    return (
      <div className="farmcrop">
        <h2>{ this.props.title }</h2>
      <div><img width="200" src={ this.props.poster } alt="desc" /></div>
        <p>({ this.props.type })</p>
        <p>{ this.props.alt }</p>
      </div>
    );
  }
}
 
export default FarmCrop;