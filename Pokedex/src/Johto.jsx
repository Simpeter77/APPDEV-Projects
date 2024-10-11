// Johto.js
import React from 'react';

export default function Johto({ pokemon, loading }) {
    const johtoPokemon = pokemon.slice(151, 251); // Johto Pokémon indices

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (loading) {
        return <div>Loading Johto Pokémon...</div>; // Loading message for Johto
    }

    return (
        <div>
            <h1 id="label">Johto Region</h1>
            <div id="container">
                {johtoPokemon.map((poke, index) => (
                    <div className="PokemonCard" key={index}>
                        <h2>#{index + 152}</h2> {/* Johto Pokémon start from 152 */}
                        <img src={poke.url} alt={poke.name} />
                        <h1>{paskal(poke.name)}</h1> 
                    </div>
                ))}
            </div>
        </div>
    );
}
