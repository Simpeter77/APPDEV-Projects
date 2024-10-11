// Hoenn.js
import React from 'react';

export default function Sinnoh({ pokemon, loading }) {
    const sinnohPokemon = pokemon.slice(387, 493); // Hoenn Pokémon indices

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (loading) {
        return <div id="Loading">Loading Sinnoh Pokémon...</div>; // Loading message for Hoenn
    }

    return (
        <div>
            <h1 id="label">Sinnoh Region</h1>
            <div id="container">
                {sinnohPokemon.map((poke, index) => (
                    <div className="PokemonCard" key={index}>
                        <h2>#{index + 387}</h2>
                        <img src={poke.url} alt={poke.name} />
                        <h1>{paskal(poke.name)}</h1> 
                    </div>
                ))}
            </div>
        </div>
    );
}
