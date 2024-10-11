import React from 'react';
export default function Kanto({ pokemon }) {
    const johtoPokemon = pokemon.slice(151,251)
    return (
        <div>
            <h1 id ="label">Johto Region</h1>
            <ul>
                {johtoPokemon.map((poke, index) => (
                <div className="PokemonCard">
                <h2>#{index+151}</h2>
                <img src={poke.url} alt={poke.name} />
                <h1>{poke.name}</h1> 
            </div>
                ))}
            </ul>
        </div>
    );
}
