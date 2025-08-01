import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Form submitted');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '60vh', overflow: 'hidden'}}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '30px',
          borderRadius: '12px',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Box shadow added here
        }}
      >
        <h3 className="mb-4 text-center">Sign In</h3>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
      

        <Button variant="primary" type="submit" className="w-100">
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
