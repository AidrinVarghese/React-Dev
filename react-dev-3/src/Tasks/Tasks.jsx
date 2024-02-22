import React from 'react';
import { Card, Form } from 'react-bootstrap';
import styles from './Task.module.css'; 

const Task = ({ task }) => {
  return (
    <Card className={styles.task}> 
      <Form.Check
        label={task.title}
        checked={task.status === "complete" ? true : false}
        value={task.id}
        className={styles.formCheck} 
      />
    </Card>
  );
};

export default Task;
