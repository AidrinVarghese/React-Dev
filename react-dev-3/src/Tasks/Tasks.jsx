import React, {useState} from 'react';
import { Card, Form } from 'react-bootstrap';
import styles from './Task.module.css'; 

const Task = ({ task, onChangeStatus}) => {
  const [isChecked, setIsChecked] = useState(task.status === "complete"? true : false)
  return (
    <Card className={styles.task}> 
      <Form.Check
          label={task.title}
          checked={isChecked}
          value={task.id}
          className={styles.formCheck} 
          onChange={(e) => { onChangeStatus(e, task.id); setIsChecked((prev) => !prev)}}
        />
    </Card>
  );
};

export default Task;
