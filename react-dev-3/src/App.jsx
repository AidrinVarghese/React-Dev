import './App.css';
import { initialTasks } from './Data';
import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'; // Import Form and Button from react-bootstrap
import TaskList from './TaskList/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filterState, setFilterState] = useState("All");
  const [completeCount, setCompleteCount] = useState();
  const [incompleteCount, setIncompleteCount] = useState();

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
    let status = formData.get('status').toLowerCase()
    console.log(tasks); // Get status and convert to lowercase for case-insensitivity
    if (status !== 'complete' && status !== 'incomplete') {
      alert('Status must be either "complete" or "incomplete".');
      console.log(tasks)
      return; // Exit the function if status is invalid
    }
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

  useEffect(() => {
    console.log("Tasks updated:", tasks);
    console.log("Filtered tasks updated:", filteredTasks);
    return () => {
      console.log("Cleanup");
    }
  }, [tasks, filteredTasks]);

  useEffect(() => {
    if (filterState !== "All") {
      const filteredTasks = tasks.filter((task) => task.status === filterState);
      setFilteredTasks(filteredTasks);
    } else {
      setFilteredTasks(tasks);
    }
  }, [tasks, filterState]);

  useEffect(() => {
    const completeTasks = tasks.filter((task) => task.status === "complete");
    const incompleteTasks = tasks.filter((task) => task.status === "incomplete");
    setCompleteCount(completeTasks.length);
    setIncompleteCount(incompleteTasks.length);
    if (tasks[0].status !== "complete" &&  tasks[0].status !== "incomplete"){
      setError('Should enter status as complete or incomplete');
      setTasks((prev) => prev.filter(task => task.status === "complete" || task.status === "incomplete"));
  }, [tasks]);


  // useEffect(() =>{},[])

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
        <p>Complete: {completeCount}</p>
        <p>Incomplete: {incompleteCount}</p>
        <select onChange={(e) => { setFilterState(e.target.value) }}>
          <option value={"All"}>All</option>
          <option value={"complete"}>Complete ({completeCount})</option>
          <option value={"incomplete"}>Incomplete ({incompleteCount})</option>
        </select>
      </Card.Title>
      <Card.Body>
        <TaskList tasks={filteredTasks} onChangeStatus={onChangeStatus} />
      </Card.Body>
    </Card>
  );
}

export default App;
