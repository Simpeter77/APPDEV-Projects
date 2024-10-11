import React from 'react';
export default function Kanto({ pokemon }) {
    const hoennPokemon = pokemon.slice(251, 386); 
    return (
        <div>
            <h1 id ="label">Hoenn Region</h1>
            <ul>
                {hoennPokemon.map((poke, index) => (
                <div className="PokemonCard">
                <h2>#{index+251}</h2>
                <img src={poke.url} alt={poke.name} />
                <h1>{poke.name}</h1> 
            </div>
                ))}
            </ul>
        </div>
    );
}
