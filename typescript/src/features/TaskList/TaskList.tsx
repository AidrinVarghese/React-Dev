import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import Tasks from '../Tasks/Tasks'
import styles from './TaskList.module.css'
import { Theme } from '../../components/ThemeContext/ThemeContext'
 
const TaskList = ({tasks, onChangeStatus}) => {

  const {theme} = useContext(Theme)
  return (
    <Card className={`${theme?`${styles.tasklistlight}`:`${styles.tasklistdark}`}`}>
        {tasks.map((task) => {
            return <Tasks key={task.id} task={task} onChangeStatus={onChangeStatus}></Tasks>
        })}
    </Card>
  )
}
 
export default TaskList