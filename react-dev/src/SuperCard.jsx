import React from 'react'
// import styles from './SuperCard.module.css'
import { useState } from 'react'

export const SuperCard = ({children, bgColor}) => {
  return (
    <div className={bgColor}>{children}</div>
  )
}
