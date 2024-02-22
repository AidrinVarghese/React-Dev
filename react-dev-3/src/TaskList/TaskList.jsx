import React from 'react'
import { Card } from 'react-bootstrap'
import Tasks from '../Tasks/Tasks'
import styles from './TaskList.module.css'
 
const TaskList = ({tasks, onChangeStatus}) => {
  return (
    <Card className={styles.tasklist}>
        {tasks.map((task) => {
            return <Tasks key={task.id} task={task} onChangeStatus={onChangeStatus}></Tasks>
        })}
    </Card>
  )
}
 
export default TaskList