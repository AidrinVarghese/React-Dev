import React, { Fragment } from 'react'
// import Heading from './heading'
// import Body from './Body'
// import Card from './Card'
// import {userData} from './Data'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
const App = () => { 
  // let name = "Aidrin"; 
  return (
    <Fragment>
      {/* <Heading />
        <Body />
        {/* <form method='POST'>
          <input type="text"  name = 'someone'/>
          <input type="submit" />
        </form> */}
        {/* {userData.map((user)=><Card user = {user}/>)}         */}
        <ComponentA/>
        <ComponentB/>
    </Fragment>
  )
}

export default App;
