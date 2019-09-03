import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

const Navigation = () => {
  return(
    <Container>
      <Row>
      <Col>
      <NavLink to="/"> <h4>Home</h4> </NavLink>
      </Col>
      <Col>
      <NavLink to="/about"> About </NavLink>
      </Col>
      <Col>
      <NavLink to="/contact"> Contact </NavLink>
      </Col>
      </Row>
    </Container>
  );

};

export default Navigation;
