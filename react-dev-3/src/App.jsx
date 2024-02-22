import logo from './logo.svg';
import './App.css';
import { initialTasks } from './Data';
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'; // Import Form and Button from react-bootstrap
import TaskList from './TaskList/TaskList';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const filterFunction = (e) => {
    if (e.target.value !== "All") {
      const filteredTasks = tasks.filter((task) => task.status === e.target.value);
      setFilteredTasks(filteredTasks);
    } else {
      setFilteredTasks(tasks);
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newData = {};
    for (let [key, value] of formData) {
      newData[key] = value;
    }
    setTasks((prev) => {
      const id = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1; // Ensure unique id
      newData.id = id;
      return [newData, ...prev];
    });
    e.target.reset(); // Reset the form after submitting
  };

  const onChangeStatus = (e, id) => {    
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, status: e.target.checked ? "complete" : "incomplete" };
        }
        return task;
      });
    });
  };

  return (
    <Card className="main mx-5 px-5">
      <Form onSubmit={addTask}>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" />
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="complete or incomplete" name="status" />
        <Button type="submit" className='my-3' variant="success">Add</Button>
      </Form>
      <Card.Title>
        <p>Complete: </p>
        <p>Incomplete: </p>
        <select onChange={(e) => { filterFunction(e) }}>
          <option value={"All"}>All</option>
          <option value={"complete"}>Complete</option>
          <option value={"incomplete"}>Incomplete</option>
        </select>
      </Card.Title>
      <Card.Body>
        {filteredTasks ? <TaskList tasks={filteredTasks} onChangeStatus={onChangeStatus} /> : <TaskList tasks={tasks} onChangeStatus={onChangeStatus} />}
      </Card.Body>
    </Card>
  );
}

export default App;
