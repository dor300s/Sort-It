import React from 'react';
import { NavBar } from './components/NavBar';
import { Sort } from './views/Sort'
export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Sort />
    </div>
  );
}