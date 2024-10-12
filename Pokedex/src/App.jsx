import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Kanto from './Kanto';
import Johto from './Johto';
import Hoenn from './Hoenn';
import Home from './Home';
import Sinnoh from './Sinnoh';
import Unova from './Unova';
import Details from './Details';
import Kalos from './Kalos';
import Alola from './Alola';
import Galar from './Galar';
import Paldea from './Paldea';
import Hisui from './Hisui';
import './App.css';

export default function App() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(''); // State for search term

    useEffect(() => {
        const fetchAllPokemon = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const maxPokemon = 1025;
                const fetches = [];

                for (let i = 1; i <= maxPokemon; i++) {
                    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                    fetches.push(fetch(url).then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok for ' + url);
                        }
                        return response.json();
                    }));
                }

                const pokemonData = await Promise.all(fetches);
                const pokemons = pokemonData.map((data) => ({
                    name: data.name,
                    url: data.sprites.front_default,
                    id: data.id,
                    weight: data.weight,
                    height: data.height,
                    types: data.types.map((t) => t.type.name), }));
                setPokemon(pokemons);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllPokemon();
    }, []);

    return (
        <Router>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={<Home pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/kanto" element={<Kanto pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/johto" element={<Johto pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/hoenn" element={<Hoenn pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/sinnoh" element={<Sinnoh pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/unova" element={<Unova pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/kalos" element={<Kalos pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/alola" element={<Alola pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/galar" element={<Galar pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/hisui" element={<Hisui pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/paldea" element={<Paldea pokemon={pokemon} loading={loading} searchTerm={searchTerm} />} />
            </Routes>
        </Router>
    );
}
