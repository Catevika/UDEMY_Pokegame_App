import React, { Component } from 'react';
import '../components/Pokecard.css';

let POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className='Pokecard'>
        <h2 className='Pokecard-title'>{this.props.name}</h2>
        <div className='Pokecard-image'>
          <img src={imgSrc} alt='' />
        </div>
        <div className='Pokecard-data'>Type: {this.props.type}</div>
        <div className='Pokecard-data'> XP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
