import React , {Component} from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Error from "./page/Error";
import Navigation from "./page/Navigation";

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      </BrowserRouter>
    );
  }
}
