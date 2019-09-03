import React from "react";

export default class Body extends React.Component{

onTitleChange(e){
  this.props.onTitleChange(e.target.value);
}

  render(){
      return (
        <div>
        <div> { this.props.title} </div>
        <input value={this.props.title} title={this.props.title} onChange={this.onTitleChange.bind(this)}/>
      </div>
      )
  }
}
