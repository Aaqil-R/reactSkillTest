import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Row, Col, Button, Form , ALer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  const history = useHistory();

  const updateInput = (e, callback) => {
    setValidationError('');
    callback(e.target.value);
  };

  const clickLogin = () => {
    if (username === '' || password === '') {
      setValidationError("Username or password cannot be empty");
    } else {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
      })
        .then(res => res.json())
        .then(result => {
          if (result.token) {
            history.push('/profile');
          } else {
            setValidationError(result.error);
          }
        });
    }
  };

  const showPassword = e => {
    const x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                onChange={e => updateInput(e, setUsername, 'username')}
                value={username}
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={e => updateInput(e, setPassword, 'password')}
                value={password}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-danger">
            {validationError}
          </Col>          
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Check
                type="checkbox"
                onClick={e => showPassword(e)}
                label="Show Password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Button size="lg" block onClick={e => clickLogin(e)}>
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
