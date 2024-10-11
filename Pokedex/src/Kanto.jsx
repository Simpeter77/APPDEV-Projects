import React from 'react';

export default function Kanto({ pokemon, loading, searchTerm }) {
    const kantoPokemon = pokemon.slice(0, 151); // Kanto Pokémon indices

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (loading) {
        return <img src="https://i.pinimg.com/originals/b5/f2/8a/b5f28ae81ce69ccf4f2328c38e0d3e34.gif" id="Loading"/> // Loading message for Kanto
    }
    const filteredPokemon = kantoPokemon.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1 id="label">Kanto Region</h1>
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