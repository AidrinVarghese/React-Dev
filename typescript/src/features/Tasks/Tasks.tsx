import React, {useContext, useState} from 'react';
import { Card, Form } from 'react-bootstrap';
import styles from ".."
import { Theme } from '../../components/ThemeContext/ThemeContext';
import { ThemeContextType } from '../../components/ThemeContext/types';

interface TaskPropType{
  task:{
    id:number;
    status: "complete"|"incomplete";
    title:string;
  };
  onChangeStatus:(e: React.ChangeEvent<HTMLInputElement>,id:number)=>void
}

const Task = ({task, onChangeStatus}: TaskPropType) => {
  const [isChecked, setIsChecked] = useState<boolean>(task.status === "complete"? true : false)

  const {theme} = useContext<ThemeContextType>(Theme)

  return (
    <Card className= {`${theme?`${styles.tasklight}`:`${styles.taskdark}`}`}> 
      <Form.Check
          label={task.title}
          checked={isChecked}
          value={task.id}
          className={styles.formCheck} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChangeStatus(e, task.id); setIsChecked((prev) => !prev)}}
        />
    </Card>
  );
};

export default Task;
