import React, {Component} from 'react'

class Student extends Component{
    state={
     name:"shaista",
     result: this.props.result
    };
    render(){
     return <h1>Hey, My name is {this.state.name} and my result is: {this.state.result}</h1>
    }
}

export default Student;
