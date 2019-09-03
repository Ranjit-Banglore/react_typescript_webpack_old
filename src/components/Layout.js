import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Home from "./Home";

export default class Layout extends React.Component{

constructor(){
    super();
    this.state={
      title : "Start typing to see the magic..."
    };
}

onTitleChange(title){
    this.setState({title: title});
}

  render(){
    return(
      <div>
        <Header />
        <Body onTitleChange={this.onTitleChange.bind(this)} title={this.state.title} />
        <Home />
        <Footer />
      </div>
    )
  }
}
