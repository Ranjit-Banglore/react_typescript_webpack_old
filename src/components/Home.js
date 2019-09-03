import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";

const NewRoute = () => {
  return (
    <div>
        <p> Home</p>
    </div>
  )
}

export default class Home extends Component{
  render(){
    return (
      <BrowserRouter>
        <Route path="/" component={NewRoute} />
      </BrowserRouter>
    )
  }
}
