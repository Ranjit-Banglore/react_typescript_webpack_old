import React, {Component} from "react";
import {Container, Col, Row, Alert} from "react-bootstrap";

export default class Contact extends Component{
  render(){
    return (
      <div>
        <Container>
        <Alert variant="info">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        <h6>Amsterdamer Str. 413347 Berlin </h6>
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
      </p>
    </Alert>
    </Container>

      </div>
    )
  }
}
