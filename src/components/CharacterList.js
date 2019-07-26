import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setCharacters(res.data.results);
          console.log(res.data.results);
        })
        .catch(err => {
          console.log("API isn't currently working, please try again later", err);
        });
    }
    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  return <section className='character-list grid-view'>

      <h2>
        {characters.map(character => (
          <CharacterDetails key={character.id} character={character} />
        ))}
      </h2>
    </section>

}

function CharacterDetails({ character }) {
  const { id, name, status, species, type } = character
  return (
    <Link to={`/characters/${id}`}>
      <CharacterCard character={character} />
    </Link>
  );
}