import React from 'react';
import { useState } from 'react';
import './App.css'

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>Should you use a dropdown?</h1>
      <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedItem}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">

            <div className="dropdown-item" onClick={() => handleItemClick("Yes")}> Yes</div>
            <div className="dropdown-item" onClick={() => handleItemClick("Probably Not")}> Probably Not</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
