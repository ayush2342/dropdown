import React from 'react';
import Dropdown from './Dropdown';
import './App.css'

const App = () => {
  const items = ['Yes', 'Probably not'];

  return (
    <div className="App">
      <h1>Should you use a dropdown?</h1>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
