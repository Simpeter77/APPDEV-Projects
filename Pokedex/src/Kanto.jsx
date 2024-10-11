import React from 'react';
export default function Kanto({ pokemon }) {
    const kantoPokemon = pokemon.slice(0, 151); 
    return (
        <div>
            <h1 id ="label">Kanto Region</h1>
            <ul>
                {kantoPokemon.map((poke, index) => (
                <div className="PokemonCard">
                <h2>#{index+1}</h2>
                <img src={poke.url} alt={poke.name} />
                <h1>{poke.name}</h1>
                </div>
                ))}
            </ul>
        </div>
    );
}
