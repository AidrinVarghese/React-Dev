import React from 'react'
import styles from './ComponentB.module.css'

const ComponentB = () => {
  return (
    <div className={styles['shared-container']}>
      <p className={styles['shared-text']}>Component B</p>
    </div>
  )
}

export default ComponentB