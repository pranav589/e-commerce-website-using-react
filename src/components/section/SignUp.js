import React,{useState,useContext} from 'react'
import {Form,Button,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'

const SignUp=()=>{
  const DataContextProvider=useContext(DataContext)

  const{auth}=DataContextProvider

  const[email,setEmail]=useState("")
  const [password,setPassword]=useState('')
  const[name,setName]=useState('')
  const[isAuth,setIsAuth]=useState(auth)

  const signUpHandler=(e)=>{
    e.preventDefault()
    setEmail("")
    setPassword("")
    setName("")
    
  }


  
  

  return(
    <Card>
    <Form onSubmit={signUpHandler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} value={email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={e=>setName(e.target.value)} value={name} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>

  {email!=="" && password!=="" &&name!=="" ?(<Link to="/"> <Button variant="primary" type="submit">
    Sign up
  </Button></Link>):(<Button type="submit">Sign Up</Button>) }
  <p>Already have a account?</p>
  <Link to="/login">
  <Button>Login</Button>
  </Link>
</Form>
</Card>
  )
}

export default SignUp