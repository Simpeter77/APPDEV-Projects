// Hoenn.js
import React from 'react';

export default function Hoenn({ pokemon, loading, searchTerm }) {
    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    if (loading) {
        return <div id="Loading">Loading All Pokémon...</div>; // Loading message for Hoenn
    }
    // Filter Pokémon based on the search term
    const filteredPokemon = pokemon.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1 id="label">All Pokemons</h1>
            <div id="container">
                {filteredPokemon.length > 0 ? (
                    filteredPokemon.map((poke, index) => (
                        <div className="PokemonCard">
                            <h2>#{poke.id}</h2>
                            <img src={poke.url} alt={poke.name} />
                            <h1>{paskal(poke.name)}</h1> 
                            <h3>Weight: {poke.weight/10}kg</h3>
                            <h3>Height: {poke.height/10}m</h3>
                        </div>
                    ))
                ) : (
                    <p>No Pokémon found matching your search.</p>
                )}
            </div>
        </div>
    );
}
