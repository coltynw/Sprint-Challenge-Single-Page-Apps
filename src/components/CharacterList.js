import React, { useEffect, useState } from 'react';

import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([])



  const search = charArr => {
      updateData(charArr)

  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/').then(response => {

    // loggin the data
      console.log(response.data.results);


      setCharacters(response.data.results);
      updateData(response.data.results);
    });
  }, []);

  return (
    <section className='character-list'>
      <h2 className='charList'>Character List</h2>
      <SearchForm search={search} characters={characters} />
      {filteredData.map(char => {
        // since each card already has a unique ID I set it to the key
        return <CharacterCard key={char.id} character={char} />;
      })}
    </section>
  );
}