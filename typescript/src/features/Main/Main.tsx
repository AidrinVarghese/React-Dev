// import { initialTasks } from './Data';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Form, Button, Spinner, Pagination } from 'react-bootstrap';
import TaskList from '../TaskList/TaskList';
import axios, { AxiosError } from 'axios';
import {fetchTasks} from "./api/getTasks";
import NavBar from '../../components/NavBar/NavBar';
import { Theme } from '../../components/ThemeContext/ThemeContext';
import styles from './Main.module.css'

const Main = () => {
  const limit = 10;
  const [offset, setOffset] = useState(limit);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterState, setFilterState] = useState("All");
  const [completeCount, setCompleteCount] = useState(0);
  const [incompleteCount, setIncompleteCount] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const {theme} = useContext(Theme)

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
          setIsError(false)
          setError()
        let response = await fetchTasks(offset);
        if (response instanceof AxiosError) {
          throw response;          
        }
        else{
          setTasks(response);
        }
      } catch (err) {
        setIsError(true);
        setErrorMessage(err.toString());
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [offset]);
  
  



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
    let status = formData.get('status').toLowerCase();
    if (status !== 'complete' && status !== 'incomplete') {
      alert('Status must be either "complete" or "incomplete".');
      return;
    }
    for (let [key, value] of formData) {
      newData[key] = value;
    }
    setTasks((prev) => {
      const id = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      newData.id = id;
      return [newData, ...prev];
    });
    e.target.reset();
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
    if (tasks.length > 0) {
      const completeTasks = tasks.filter((task) => task.status === "complete");
      const incompleteTasks = tasks.filter((task) => task.status === "incomplete");
      setCompleteCount(completeTasks.length);
      setIncompleteCount(incompleteTasks.length);
      if (tasks[0].status !== "complete" &&  tasks[0].status !== "incomplete") {
        setError('Should enter status as complete or incomplete');
        setTasks((prev) => prev.filter(task => task.status === "complete" || task.status === "incomplete"));
      }
    }
  }, [tasks]);

  

  return (
    <div className='outer'>
    <NavBar></NavBar>
    <Card className={`main mx-5 px-5 ${styles.nav} ${theme?`${styles.outerlight}`:`${styles.outerdark}`}`}>
      <Form onSubmit={addTask}>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" />
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="complete or incomplete" name="status" onChange={filterFunction} />
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
      {isLoading ? (
  <Spinner />
) : isError ? <>{errorMessage}</>:(
  filteredTasks.length > 0 ? (
    <TaskList tasks={filteredTasks} onChangeStatus={onChangeStatus} />
  ) : (
    tasks.length > 0 && <TaskList tasks={tasks} onChangeStatus={onChangeStatus} />
  )
)}
      </Card.Body>
      <Card.Footer>
        <Pagination>
        <Pagination.Prev onClick={()=> setOffset((prev) => prev-limit)}
        disabled = {offset === limit?true:false}></Pagination.Prev>        
        <Pagination.Item active>{offset/10}</Pagination.Item>
        <Pagination.Next onClick={()=> setOffset((prev)=>prev+limit)}
        disabled = {offset ==50?true:false}></Pagination.Next>
        </Pagination>        
      </Card.Footer>
    </Card>
    </div>
  );
}

export default Main;
