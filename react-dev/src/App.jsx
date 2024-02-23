import React, { Fragment, useState } from 'react';
import Body from './Body';

import './styles.css';

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
    <Fragment>
      <div>
        <Body />
        <form className="input-form">
          <input type="text" placeholder="Enter the ID" />
          <input type="text" placeholder="Enter first_name" />
          <input type="text" placeholder="Enter last_name" />
          <input type="text" placeholder="Enter email" />
          <input type="text" placeholder="Enter gender" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default App;
