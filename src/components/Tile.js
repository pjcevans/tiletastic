import React, { Component } from "react";

class Tile extends Component {
  render() {
    const tile = {
      backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/" + this.props.tileBackground + ")",
    };
    return (
      <div className="tile" style={tile}>
      </div>
    );
  }
}

export default Tile;
// <img src={process.env.PUBLIC_URL + "/img/" + this.props.tileBackground} alt={this.props.id} />
