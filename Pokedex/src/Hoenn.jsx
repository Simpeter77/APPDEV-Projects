// Hoenn.js
import React from 'react';

export default function Hoenn({ pokemon, loading }) {
    const hoennPokemon = pokemon.slice(251, 386); // Hoenn Pokémon indices

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (loading) {
        return <div id="Loading">Loading Hoenn Pokémon...</div>; // Loading message for Hoenn
    }

    return (
        <div>
            <h1 id="label">Hoenn Region</h1>
            <div id="container">
                {hoennPokemon.map((poke, index) => (
                    <div className="PokemonCard" key={index}>
                        <h2>#{index + 251}</h2>
                        <img src={poke.url} alt={poke.name} />
                        <h1>{paskal(poke.name)}</h1> 
                    </div>
                ))}
            </div>
        </div>
    );
}
