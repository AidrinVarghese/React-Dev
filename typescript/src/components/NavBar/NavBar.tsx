import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, Dropdown, Nav, NavbarBrand} from 'react-bootstrap'
import styles from "./NavBar.module.css"
import { Theme } from '../ThemeContext/ThemeContext'
import { Auth } from '../AuthContext/AuthContext'


function NavBar() {
  const {theme,changeTheme} = useContext(Theme)
  const {mail} = useContext(Auth)
  const navigate = useNavigate()

  return (
    <Nav className={`${styles.nav} ${theme?`${styles.light}`:`${styles.dark}`}`}>
        <NavbarBrand></NavbarBrand>
        {mail?<h4>{mail}</h4>:<>Hello</>}
        <Dropdown>
          <Dropdown.Toggle variant="primary" className={styles.btn}>
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
            <Button className={styles.btn} variant='danger' onClick={changeTheme}>ChangeTheme</Button>
            </Dropdown.Item>
            <Dropdown.Item>
            <Button className={styles.btn} variant='warning' onClick={()=>navigate('/')}>Logout</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </Nav>
  )
}

export default NavBar