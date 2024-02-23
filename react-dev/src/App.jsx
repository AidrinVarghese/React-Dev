import React, { Fragment, useEffect, useState } from 'react';
import Body from './Body';
import Card from './Card';
import { userData } from './Data';
import { SuperCard } from './SuperCard.jsx';
import styles from './SuperCard.module.css'
import { useNavigate } from 'react-router-dom';

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
  
  const [bgColor, superBgColor] = useState(styles.super);
  const SuperCardChange = (e) => {
    superBgColor(styles.superCard_changed)
  }
  const navigate = useNavigate();
  const route=() =>{
    navigate('/abc');
  }
// callback function, empty array
// second return clean up function
// mainly used for Api calls
  useEffect(() => {
    console.log()
    return () => { 
      console.log()
    }
  },[users])

  return (
    <Fragment>
      <div>
        <Body />
        <button type='button' onClick={route}>Slap the butt</button>
        <input type="text" name="test" onChange={(e) => filterFunction(e)} />
        {users.map((user) => (
          <SuperCard key={user.id} bgColor={bgColor} >
            <Card key={user.id} user={user} SuperCardChange = {SuperCardChange} />
          </SuperCard>          
        ))}
      </div>
    </Fragment>
  );
};

export default App;
