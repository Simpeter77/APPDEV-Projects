import React from 'react';
export default function Home({ pokemon, loading }) {
    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (loading) {
        return <div id="Loading">Loading All Pokémon...</div>; // Loading message for Hoenn
    }

    return (
        <div>
            <h1 id="label">Pokedex</h1>
            <div id="container">
                {pokemon.map((poke, index) => (
                    <div className="PokemonCard" key={index}>
                        <h2>#{index + 1}</h2>
                        <img src={poke.url} alt={poke.name} />
                        <h1>{paskal(poke.name)}</h1> 
                    </div>
                ))}
            </div>
        </div>
    );
}
