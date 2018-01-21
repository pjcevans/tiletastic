import React, { Component } from 'react';
import Tile from './components/Tile.js';

class GameMap extends Component {
  let tiles = [];
  for (const i = 0, i < 10, i++) {
    tiles.push(<Tile />);
  }
  render() {
    return (
      <div className="game_map">
        {tiles}
      </div>
    );
  }
}

export default GameMap;
