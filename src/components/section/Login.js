import React,{useState} from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")

 const emailHandler=(e)=>{
   setEmail(e.target.value)
  
 }

 const passwordHandler=(e)=>{
   setPassword(e.target.value)
   
 }

 const loginHandler=(e)=>{
   e.preventDefault()
   setEmail("")
   setPassword("")
 }

  return (
    <Card>
      <Form onSubmit={loginHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={emailHandler} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={passwordHandler} value={password}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {email!=="" && password!=="" ?(<Link to="/"><Button variant="primary" type="submit">
          Login
        </Button></Link> ):(<Button type="submit" >Login</Button>)}
        <p>Don't have a account?</p>
        <Link to="/signup">
          <Button> Register</Button>
        </Link>
      </Form>
    </Card>
  );
};

export default Login;
