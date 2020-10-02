
import React,{useState} from "react";
import {Form,Button,Card} from 'react-bootstrap'


const Contact = () => {
  const [email,setEmail]=useState("")
  const[message,setMessage]=useState("")
  const formHandler=(e)=>{
        e.preventDefault()
        alert("Your message is received")
        setEmail("")
        setMessage("")
  }

  const emailHandler=(e)=>{
      setEmail(e.target.value)
    }

  const messageHandler=(e)=>{
    setMessage(e.target.value)
  }

return (
<Card>
<Form onSubmit={formHandler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required onChange={emailHandler} value={email}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" max="3" required onChange={messageHandler} value={message}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>
);
};

export default Contact;