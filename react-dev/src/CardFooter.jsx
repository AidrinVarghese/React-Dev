import React from 'react'
import { userData } from './Data'
const CardFooter = ({email},{gender}) => {
  return (
    <div className='footer'>
      {email}
      {gender}                 
    </div>
  )
}

export default CardFooter