// Hoenn.js
import React from 'react';

export default function Unova({ pokemon, loading }) {
    const unovaPokemon = pokemon.slice(494, 649); // Hoenn Pokémon indices
    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (loading) {
        return <div id="Loading">Loading Unova Pokémon...</div>; // Loading message for Hoenn
    }

    return (
        <div>
            <h1 id="label">Unova Region</h1>
            <div id="container">
                {unovaPokemon.map((poke, index) => (
                    <div className="PokemonCard" key={index}>
                        <h2>#{index + 494}</h2>
                        <img src={poke.url} alt={poke.name} />
                        <h1>{paskal(poke.name)}</h1> 
                    </div>
                ))}
            </div>
        </div>
    );
}
