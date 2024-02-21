import React, { Fragment, useState } from 'react';
import Heading from './heading';
import Body from './Body';
import Card from './Card';
import { userData } from './Data';
import ComponentA from './ComponentA.jsx';
import ComponentB from './ComponentB.jsx';

const App = () => {
  const [users, setUsers] = useState(userData);

  const filterFunction = (e) => {
    const val = parseInt(e.target.value);
    if (!val) {
      setUsers(userData); // Reset to original data if input is empty
    } else {
      const filtered = userData.filter((user) => user.id === val);
      setUsers(filtered);
    }
  };

  return (
    <Fragment>
      <div>
        <Body />
        <input type="text" name="test" onChange={(e) => filterFunction(e)} />
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </Fragment>
  );
};

export default App;
