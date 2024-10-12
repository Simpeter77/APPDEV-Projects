// Details.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Details.css';

export default function Details() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();

                // Assign the correct details structure
                const details = {
                    name: data.name,
                    url: data.sprites.front_default,
                    id: data.id,
                    weight: data.weight,
                    height: data.height,
                    types: data.types.map((t) => paskal(t.type.name)),
                };
                setDetails(details);
            } catch (error) {
                console.error('Error fetching Pokémon details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemonDetails();
    }, [id]); // Dependency on id

    if (loading) {
        return (
            <img
                src="https://i.pinimg.com/originals/b5/f2/8a/b5f28ae81ce69ccf4f2328c38e0d3e34.gif"
                alt="Loading..."
                id="Loading"
            />
        );
    }

    if (!details) return <div>No Pokémon found!</div>;

    const handleNext = () => {
        if (parseInt(id) === 1026) {
            navigate(`/details/1`); // Wrap around to the first Pokémon
        } else {
            navigate(`/details/${parseInt(id) + 1}`); // Go to the next Pokémon
        }
    };

    const handlePrevious = () => {
        if (parseInt(id) === 1) {
            navigate(`/details/1026`); // Wrap around to the last Pokémon
        } else {
            navigate(`/details/${Math.max(parseInt(id) - 1, 1)}`); // Go to the previous Pokémon
        }
    };

    return (
        <div className="details-container">
            <button className="nav-arrow left-arrow" onClick={handlePrevious}>
                &larr;
            </button>

            <div className="details-content">
                <h1>{paskal(details.name)}</h1> {/* Using the paskal function */}
                <img src={details.url} alt={details.name} />
                <h3 id="description">Weight: {details.weight / 10} kg</h3>
                <h3 id="description">Height: {details.height / 10} m</h3>
                <h3 id="description">Types: {details.types.join(' | ')}</h3>
            </div>

            <button className="nav-arrow right-arrow" onClick={handleNext}>
                &rarr;
            </button>
        </div>
    );
}
