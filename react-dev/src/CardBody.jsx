import React from 'react'


const CardBody = ({first_name, last_name}) => {
  return (
    <div className='body'>
         {first_name},
         {last_name}
    </div>
  )
}
export default CardBody
