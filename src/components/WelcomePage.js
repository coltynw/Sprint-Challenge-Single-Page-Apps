import React from 'react';
import {Link} from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className='welcome-page'>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        {/* made regular text link to the next page and then made the img link there as well*/}
        <Link className='listLink' to={'/characters'}>Character List and Search
        <Link className='listLink' to={'/characters'}></Link><img
          className='main-img'
          src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          alt='rick'
        /></Link>
      </header>
    </section>
  );
}
