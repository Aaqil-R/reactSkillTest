import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const PageNotFound = ({ history }) => {
  return (
    <div className="col-md-12 page-not-found">
      <Row className="justify-content-md-center">
        <Col className="code" md="auto">
            <h2>404</h2>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text" md="auto">
            <h1>PAGE NOT FOUND</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Button
          className="btn btn-primary"
          md="auto"
          onClick={() => history.push('/')}
        >
           Go Back
        </Button>
      </Row>
    </div>
  );
}

export default PageNotFound;
