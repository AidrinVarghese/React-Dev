import React from 'react'
import { Card } from 'react-bootstrap'
import Tasks from '../Tasks/Tasks'
import styles from './TaskList.module.css'
 
const TaskList = ({tasks}) => {
  return (
    <Card className={styles.tasklist}>
        {tasks.map((task) => {
            return <Tasks task= {task}></Tasks>
        })}
    </Card>
  )
}
 
export default TaskList