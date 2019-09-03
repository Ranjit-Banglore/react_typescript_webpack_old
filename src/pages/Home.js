import React, {Component} from "react";
import {Container, Col, Row, Alert} from "react-bootstrap";

export default class Home extends Component{
  render(){
    return (
      <Container>
        <Alert variant="secondary">
        <h2> Welcome to my brand new website!! </h2>
        <p>It is build on react.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex
          UIs from small and isolated pieces of code called “components” </p>
        <hr />
      <p>We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen. When our data changes,
           React will efficiently update and re-render our components.</p>
    </Alert>
    </Container>
    )
  }
}
