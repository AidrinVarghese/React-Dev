import React, { useContext, useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import styles from './Login.module.css'
import { Auth } from '../../components/AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [msg,setMsg] = useState()
  const {login} = useContext(Auth)
  const submit = async (e) => {
    e.preventDefault()
    console.log("hello")
    const formData = new FormData(e.target);
    let userDetails = {}
    for(let[key,value] of formData){
      userDetails[key] = value
    }
    let res = await login(userDetails)
    console.log(res)
    if(res)
    {
      navigate('/tasks')
    }
  }
  return (
   <Form className={styles.form} onSubmit={(e) => submit(e)} >
    <Form.Label>
        Email
    </Form.Label>
    <Form.Control type='email' name='email'>

    </Form.Control>
    <Form.Label>
        Password
    </Form.Label>
    <Form.Control type='password' name='password'>
    </Form.Control>    
    <Button className={styles.submitbtn} variant='success' type='submit'>Submit</Button>
   </Form>
  )
}
export default Login