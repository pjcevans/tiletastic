import React, { Component } from 'react';
import Tile from './Tile.js';

class GameMap extends Component {
  render() {
    let tiles = [];
    for (let i = 0; i < 16; i++) {
      tiles.push(<Tile />);
    }
    let filledTiles = [
      {
        tileBackground: "map0tile1.jpg",
      },
      {
        tileBackground: "map0tile2.png",
      },
      {
        tileBackground: "map0tile3.png",
      },
      {
        tileBackground: "map0tile4.png",
      },
      {
        tileBackground: "map0tile5.png",
      },
      {
        tileBackground: "map0tile6.png",
      },
      {
        tileBackground: "map0tile7.png",
      },
      {
        tileBackground: "map0tile8.png",
      },
      {
        tileBackground: "map0tile9.png",
      },
      {
        tileBackground: "map0tile10.png",
      },
      {
        tileBackground: "map0tile11.png",
      },
      {
        tileBackground: "map0tile12.png",
      },
      {
        tileBackground: "map0tile13.png",
      },
      {
        tileBackground: "map0tile14.png",
      },
      {
        tileBackground: "map0tile15.png",
      },
      {
        tileBackground: "map0tile16.png",
      }
    ];
    tiles = filledTiles.map((item, count) => {
      return <Tile key={count} id={count} tileBackground={item.tileBackground} />
    })
    return (
      <div className="game_map">
        {tiles}
      </div>
    );
  }
}

export default GameMap;
