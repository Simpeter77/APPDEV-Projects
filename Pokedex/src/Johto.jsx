import React, { useEffect, useState } from 'react';

export default function Johto() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=251&offset=152')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Create an array of fetch requests to get detailed data for each Pokémon
                const fetches = data.results.map((pokemon) =>
                    fetch(pokemon.url)
                        .then(response => response.json())
                        .then(details => ({
                            name: pokemon.name,
                            url: details.sprites.front_default, // Image URL
                        }))
                );

                // Wait for all fetches to complete and update state
                Promise.all(fetches).then(results => {
                    setPokemon(results);
                    setLoading(false);
                });
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="Johto">
            <h1>List of Johto Pokemon</h1>
            <ul>
                {pokemon.map((poke, index) => (
                    <li key={index}>
                        {poke.name}
                        <br />
                        <img src={poke.url} alt={poke.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
