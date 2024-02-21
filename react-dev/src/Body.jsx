// rafc

import React,{useState} from 'react'
import './Body.css'
const Body = () => {
  const [background, setBackground] = useState('body');
  const changeBackground = () => {
    if (background == 'body'){
      setBackground('body2');
    }
    else{
      setBackground('body');
    }
  };

  return (
    <div onClick={changeBackground} className={`${background}`}>Hi !</div>
  )
}


export default Body;


