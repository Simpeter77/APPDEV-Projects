import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Kanto from './Kanto';
import Johto from './Johto';
import Hoenn from './Hoenn';
import './App.css'

export default function App() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllPokemon = async () => {
            try {
                // Fetching basic Pokémon data
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                
                // Fetch details for each Pokémon
                const fetches = data.results.map(async (poke) => {
                    const detailResponse = await fetch(poke.url);
                    const details = await detailResponse.json();
                    return {
                        name: poke.name,
                        url: details.sprites.front_default,
                    };
                });

                // Wait for all fetches to complete
                const pokemons = await Promise.all(fetches);
                setPokemon(pokemons);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllPokemon();
    }, []);

    if (loading) {
        return <h1>Loading Pokémon...</h1>;
    }

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/kanto" element={<Kanto pokemon={pokemon} />} />
                <Route path="/johto" element={<Johto pokemon={pokemon} />} />
                <Route path="/hoenn" element={<Hoenn pokemon={pokemon} />} />
            </Routes>
        </Router>
    );
}
