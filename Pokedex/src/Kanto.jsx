import React from 'react';

export default function Kanto({ pokemon, loading }) {
    const kantoPokemon = pokemon.slice(0, 151); // Kanto Pokémon indices

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (loading) {
        return <div id="Loading">Loading Kanto Pokémon...</div>; // Loading message for Kanto
    }

    return (
        <div>
            <h1 id="label">Kanto Region</h1>
            <div id="container">
                {kantoPokemon.map((poke, index) => (
                    <div className="PokemonCard" key={index}>
                        <h2>#{index + 1}</h2>
                        <img src={poke.url} alt={poke.name} loading="lazy"/>
                        <h1>{paskal(poke.name)}</h1> 
                    </div>
                ))}
            </div>
        </div>
    );
}