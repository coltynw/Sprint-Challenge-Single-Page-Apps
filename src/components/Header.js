import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='ui centered'>
      {/* made this link to home */}
      <Link to='/'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      </Link>
    </header>
  );
}
