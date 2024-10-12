import React from 'react';
import { Link } from 'react-router-dom';
export default function Paldea({ pokemon, loading, searchTerm }) {
    const pokemonRange = pokemon.slice(905,1008); 

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    if (loading) {
        return <img src="https://i.pinimg.com/originals/b5/f2/8a/b5f28ae81ce69ccf4f2328c38e0d3e34.gif" id="Loading"/>
    }
    const filteredPokemon = pokemonRange.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1 id="label">Paldea Region</h1>
            <div id="container">
                {filteredPokemon.length > 0 ? (
                    filteredPokemon.map((poke) => (
                        <Link 
                            to={`/details/${poke.id}`} 
                            key={poke.id} 
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="PokemonCard" style={{ cursor: 'pointer' }}>
                                <h2>#{poke.id}</h2>
                                <img src={poke.url} alt={poke.name} />
                                <h1>{paskal(poke.name)}</h1>
                            </div>
                             
                        </Link>
                    ))
                ) : (
                    <p>No Pokémon found matching your search.</p>
                )}
            </div>
        </div>
    );
}