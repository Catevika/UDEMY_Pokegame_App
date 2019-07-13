import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = (
        <h2 className='Pokedex-Winner' style={{ color: 'teal' }}>
          Winning hand
        </h2>
      );
    } else {
      title = (
        <h2 className='Pokedex-Loser' style={{ color: 'maroon' }}>
          Losing hand
        </h2>
      );
    }

    return (
      <div className='Pokedex'>
        <h2>Total Experience: {this.props.exp}</h2>
        {title}
        <div className='Pokedex-container'>
          {this.props.pokemons.map(card => (
            <Pokecard
              key={card.id}
              id={card.id}
              name={card.name}
              type={card.type}
              exp={card.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
