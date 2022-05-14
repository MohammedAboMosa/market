import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Sign =()=> {
  return (
<Form className="container" style={{background: "#1C8EF9",margin:"150px 550px"}}>
<h3>Sign Up</h3>

<Form.Group className="mb-3 " controlId="formBasicName">
    <Form.Label>First name</Form.Label>
    <Form.Control type="name" placeholder="First name" />
  </Form.Group>

  <Form.Group className="mb-3 " controlId="formBasicName">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="name" placeholder="Last name" />
  </Form.Group>


  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" />
  </Form.Group>


  <Button variant="outline-warning" type="submit" href='/Home' style={{margin:"10px 500px 25px"}} >
  Sign Up
  </Button> 


</Form>  
)}
export default  Sign;
