import React, { Component } from 'react';

class Tile extends Component {
  const tile = {
    width: '50px',
    height: '50px',
    border: 'thin solid red',
  };
  render() {
    return (
      <div style={tile}>
        <p>tile</p>
      </div>
    );
  }
}

export default Tile;



const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
