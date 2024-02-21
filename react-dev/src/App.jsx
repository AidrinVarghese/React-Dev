import React, { useState } from 'react';
import Card from './Card.jsx'; // Import the Card component
import { userData } from './Data.js';

const App = () => {
  const [userOne, setUserOne] = useState('');
  const [userTwo, setUserTwo] = useState('');
  const [filteredUserOne, setFilteredUserOne] = useState([]);
  const [filteredUserTwo, setFilteredUserTwo] = useState([]);
  const [selectedFiltersOne, setSelectedFiltersOne] = useState([]);
  const [selectedFiltersTwo, setSelectedFiltersTwo] = useState([]);

  const filterOne = (e) => {
    setUserOne(e.target.value);
  };

  const filterTwo = (e) => {
    setUserTwo(e.target.value);
  };

  const UserOneEntry = (e) => {
    if (e.key === 'Enter') {
      const ids = userOne.split(',').map((id) => parseInt(id.trim()));
      const filtered = userData.filter((user) => ids.includes(user.id));
      setFilteredUserOne(filtered);
      setUserOne(''); // Clear input field after hitting enter
      setSelectedFiltersOne([...selectedFiltersOne, ids]); // Add selected filter to the list of selectedFiltersOne
    }
  };

  const UserTwoEntry = (e) => {
    if (e.key === 'Enter') {
      const ids = userTwo.split(',').map((id) => parseInt(id.trim()));
      const filtered = userData.filter((user) => ids.includes(user.id));
      setFilteredUserTwo(filtered);
      setUserTwo(''); // Clear input field after hitting enter
      setSelectedFiltersTwo([...selectedFiltersTwo, ids]); // Add selected filter to the list of selectedFiltersTwo
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userOne}
        onChange={filterOne}
        onKeyDown={UserOneEntry}
        placeholder="Filter User One by ID(s) and press Enter"
      />
      <input
        type="text"
        value={userTwo}
        onChange={filterTwo}
        onKeyDown={UserTwoEntry}
        placeholder="Filter User Two by ID(s) and press Enter"
      />
      <div className="selected-filters">
        <div>
          <h3>User One Selected Filters:</h3>
          <ul>
            {selectedFiltersOne.map((filter, index) => (
              <li key={index}>{filter.join(', ')}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>User Two Selected Filters:</h3>
          <ul>
            {selectedFiltersTwo.map((filter, index) => (
              <li key={index}>{filter.join(', ')}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-container">
        {/* Map through filteredUserOne and render Card component for each filtered user */}
        {filteredUserOne.map((user) => (
          <Card key={user.id} user={user} />
        ))}
        {/* Map through filteredUserTwo and render Card component for each filtered user */}
        {filteredUserTwo.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
