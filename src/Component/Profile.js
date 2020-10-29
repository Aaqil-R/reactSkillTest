import React, { useState, useEffect } from "react";

import { Table , Container , Button , Row , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const getUserData = (setUserData, pageNumber) => {
  fetch("https://reqres.in/api/users?page=" + pageNumber, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())

    .then((result) => {
      setUserData(result.data);
    });
};

function Profile(props) {
  console.log(props);
  const [userData, setUserData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getUserData(setUserData, pageNumber);
  }, [pageNumber]);

  const userInfo = userData.map((user, index) => (
    <tr key={index}>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <>
      <Container>
        <Row>
          <a href="/">
            Back to Login
          </a>
        </Row>
        <Row>
          <Col>
            <h1>Profiles Page</h1>
          </Col>
          <Col>
            <p>Welcome {props.match.params.username}!</p>
          <Col>
          </Col>
            <p>Your Password is {props.match.params.password}</p>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover responsive> 
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{userInfo}</tbody>
          </Table>
        </Row>
        <Row>
          <Button
            onClick={() => {
              setPageNumber(1);
            }}
          >
            Page 1
          </Button>

          <Button variant="secondary"
            onClick={() => {
              setPageNumber(2);
            }}
          >
            Page 2
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
