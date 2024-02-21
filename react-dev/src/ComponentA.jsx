import React from 'react'
import styles from './ComponentA.module.css'

const ComponentA = () => {
  return (
    <div className={styles['shared-container']} >
      <p className={styles['shared-text']}>Component A</p>
    </div>
  )
}

export default ComponentA