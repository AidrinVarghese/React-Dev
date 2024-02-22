import React, { Fragment, useState } from 'react';
import Body from './Body';

import './styles.css';

const App = () => {
  const [prevCard, nextCard] = () =>{

  }


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
