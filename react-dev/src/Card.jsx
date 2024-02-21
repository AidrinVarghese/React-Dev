import React from 'react'
import "./Card.css"
// import {Data} from "./Data.js"
import CardHeader from './CardHeader.jsx'
import CardBody from './CardBody.jsx'
import CardFooter from './CardFooter.jsx'

const Card = ({user}) => {
  return (
    <div className='card--body'>
      <div className='card'>
        {user.id ? <CardHeader id = {user.id}/>:<>12345</>}
        <CardBody first_name = {user.first_name} last_name = {user.last_name}/>
        <CardFooter email = {user.email} gender = {user.gender} />
        </div>
    </div>    
  )
}
export default Card
