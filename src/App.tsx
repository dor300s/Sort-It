import React from 'react';
import { NavBar } from './components/NavBar';
import { Sort } from './views/Sort';
import { StateProvider } from './store/GlobalState';

export const App = () => {
  return (
    <div className="App">
      <StateProvider>
        <NavBar />
        <Sort />
      </StateProvider>
    </div>
  );
}