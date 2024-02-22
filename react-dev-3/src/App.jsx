import logo from './logo.svg';
import './App.css';
import { initialTasks } from './Data';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
 
import TaskList from './TaskList/TaskList'
 
// import { Card } from 'react-bootstrap' is called named import
 
const App = () => {
  const [tasks, setTasks] = useState(initialTasks)
  const [filteredTasks, setFilteredTasks] = useState()

const filterFunction = (e) =>{
  // e.preventDefault();  
  if(e.target.value!=="All"){
    let filteredTasks = tasks.filter((task) => task.status === e.target.value);
    setFilteredTasks(filteredTasks)
  }
  else {
    setFilteredTasks()
  }
}
 
  return (
    <Card>
      <Card.Title>
        <p>Complete: </p>
        <p>Incomplete: </p>
        <select onChange={(e) => {filterFunction(e)}}>
          <option value={"All"}>All</option>
          <option value={"complete"}>Complete</option>
          <option value={"incomplete"}>Incomplete</option>
        </select>
      </Card.Title> 
      <Card.Body>
        {filteredTasks? <TaskList tasks = {filteredTasks}/>: <TaskList tasks = {tasks}/>}
      </Card.Body>
    </Card>
  );
}
 
export default App;